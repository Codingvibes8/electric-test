"use server";

import { services, site } from "@/data/site";
import type { QuoteState } from "@/lib/quote";

const SERVICE_OPTIONS = new Set([
  ...services.map((service) => service.shortTitle),
  "Something else",
]);

const EMAIL_FROM =
  process.env.QUOTE_FROM_EMAIL ?? "VoltCraft Website <onboarding@resend.dev>";
const EMAIL_TO = process.env.QUOTE_TO_EMAIL ?? site.email;

function clean(value: FormDataEntryValue | null, max = 500): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendQuote(
  _previousState: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const honeypot = clean(formData.get("company"), 80);
  if (honeypot) {
    // Silently accept bot submissions without sending an email.
    return { status: "success", message: "Thanks, your request is in." };
  }

  const name = clean(formData.get("name"), 80);
  const phone = clean(formData.get("phone"), 30);
  const postcode = clean(formData.get("postcode"), 12).toUpperCase();
  const service = clean(formData.get("service"), 80);
  const details = clean(formData.get("details"), 1200);
  const consent = formData.get("consent");

  const errors: QuoteState["errors"] = {};

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }

  const phoneDigits = phone.replace(/[^\d+]/g, "");
  if (phoneDigits.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a phone number we can reach you on.";
  }

  if (!/^[A-Z]{1,2}\d[A-Z\d]?(\s*\d[A-Z]{2})?$/i.test(postcode)) {
    errors.postcode = "Please enter a valid UK postcode, like GU1 4TE.";
  }

  if (!SERVICE_OPTIONS.has(service)) {
    errors.service = "Please choose the service you need.";
  }

  if (consent !== "on") {
    errors.consent = "Please confirm we can contact you about this request.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // The landing page is fully usable without credentials. Add RESEND_API_KEY
    // to .env.local to deliver real leads (see README).
    console.warn(
      "[quote] RESEND_API_KEY is not set. Quote request accepted in demo mode.",
    );
    return {
      status: "success",
      message: `Thanks, ${name.split(" ")[0]}. Your request is in.`,
    };
  }

  const submittedAt = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/London",
  }).format(new Date());

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0a1112; max-width: 620px;">
      <div style="background: #0a1112; color: #f2efe6; padding: 24px 28px; border-radius: 18px 18px 0 0;">
        <p style="margin: 0 0 6px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #f4b63f;">New website lead</p>
        <h1 style="margin: 0; font-size: 24px; font-weight: 600;">${escapeHtml(service)} in ${escapeHtml(postcode)}</h1>
      </div>
      <div style="border: 1px solid #e7e2d5; border-top: 0; border-radius: 0 0 18px 18px; padding: 28px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.6;">
          <tr><td style="padding: 6px 0; color: #5d645e; width: 110px;">Name</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 6px 0; color: #5d645e;">Phone</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding: 6px 0; color: #5d645e;">Postcode</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(postcode)}</td></tr>
          <tr><td style="padding: 6px 0; color: #5d645e;">Service</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(service)}</td></tr>
          <tr><td style="padding: 6px 0; color: #5d645e; vertical-align: top;">Details</td><td style="padding: 6px 0;">${escapeHtml(details || "No extra details provided.")}</td></tr>
          <tr><td style="padding: 6px 0; color: #5d645e;">Received</td><td style="padding: 6px 0;">${escapeHtml(submittedAt)}</td></tr>
        </table>
        <p style="margin: 24px 0 0; font-size: 12px; color: #5d645e;">Sent from the VoltCraft Electrical landing page.</p>
      </div>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [EMAIL_TO],
        subject: `New quote request: ${service} — ${postcode}`,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      throw new Error(`Resend responded with ${response.status}`);
    }
  } catch (error) {
    console.error("[quote] Failed to deliver lead", error);
    return {
      status: "error",
      message: `We couldn't send your request. Please call us on ${site.phoneDisplay} and we'll sort it out.`,
      errors: { form: "Delivery failed." },
    };
  }

  return {
    status: "success",
    message: `Thanks, ${name.split(" ")[0]}. Your request is in.`,
  };
}
