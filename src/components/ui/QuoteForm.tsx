"use client";

import { useActionState, useRef, useState } from "react";
import {
  ArrowRight,
  CaretDown,
  CheckCircle,
  Clock,
  Phone,
  ShieldCheck,
} from "@phosphor-icons/react";
import { sendQuote } from "@/app/actions/sendQuote";
import { services, site } from "@/data/site";
import { initialQuoteState } from "@/lib/quote";
import { cn, phoneHref } from "@/lib/utils";

const inputClass =
  "h-12 w-full rounded-xl border border-white/12 bg-white/[0.055] px-4 text-[15px] text-paper outline-none transition-colors duration-300 placeholder:text-paper/35 focus:border-volt/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-volt/15";

const labelClass = "mb-2 block text-[13px] font-medium text-paper/78";

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(
    sendQuote,
    initialQuoteState,
  );
  const [dismissed, setDismissed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const showSuccess = state.status === "success" && !dismissed && !pending;

  function handleFormAction(formData: FormData) {
    setDismissed(false);
    formAction(formData);
  }

  if (showSuccess) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-7 text-paper shadow-lift sm:p-9">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt/80 to-transparent" />
        <div className="flex min-h-[430px] flex-col items-start justify-center">
          <div className="grid size-14 place-items-center rounded-full bg-volt text-ink">
            <CheckCircle size={28} weight="fill" aria-hidden="true" />
          </div>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-volt">
            Request received
          </p>
          <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
            {state.message}
          </h3>
          <p className="mt-4 max-w-[38ch] text-[15px] leading-7 text-paper/65">
            One of our electricians will call you back within{" "}
            {site.responseWindow} during working hours. If it&apos;s urgent,
            call the 24/7 line and we&apos;ll pick up.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={phoneHref(site.phone)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-paper px-6 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              <Phone size={17} weight="fill" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => {
                formRef.current?.reset();
                setDismissed(true);
              }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-paper/75 transition-colors hover:border-white/30 hover:text-paper"
            >
              Send another request
            </button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-paper/40">
            <ShieldCheck size={15} aria-hidden="true" />
            Your details are only used to respond to this enquiry.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-6 text-paper shadow-lift sm:p-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt/80 to-transparent" />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-volt">
            Free quote
          </p>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
            Tell us what you need
          </h3>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-paper/65">
          <Clock size={14} className="text-volt" aria-hidden="true" />
          {site.responseWindow} response
        </span>
      </div>

      <form ref={formRef} action={handleFormAction} className="mt-7">
        <div className="mb-3.5 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
          <span>No obligation</span>
          <span>Step 1 of 1</span>
        </div>

        {state.status === "error" && state.message ? (
          <p
            role="alert"
            className="mb-4 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-xs leading-5 text-[#ffb9a9]"
          >
            {state.message}
          </p>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="quote-name">
              Your name <span className="text-volt">*</span>
            </label>
            <input
              id="quote-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Jane Smith"
              aria-invalid={Boolean(state.errors?.name)}
              aria-describedby={state.errors?.name ? "quote-name-error" : undefined}
              className={cn(inputClass, state.errors?.name && "border-danger/60")}
            />
            {state.errors?.name ? (
              <p id="quote-name-error" className="mt-1.5 text-[11px] text-[#ffb9a9]">
                {state.errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label className={labelClass} htmlFor="quote-phone">
              Phone <span className="text-volt">*</span>
            </label>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              placeholder="07700 900123"
              aria-invalid={Boolean(state.errors?.phone)}
              aria-describedby={
                state.errors?.phone ? "quote-phone-error" : undefined
              }
              className={cn(inputClass, state.errors?.phone && "border-danger/60")}
            />
            {state.errors?.phone ? (
              <p id="quote-phone-error" className="mt-1.5 text-[11px] text-[#ffb9a9]">
                {state.errors.phone}
              </p>
            ) : null}
          </div>

          <div>
            <label className={labelClass} htmlFor="quote-postcode">
              Postcode <span className="text-volt">*</span>
            </label>
            <input
              id="quote-postcode"
              name="postcode"
              type="text"
              inputMode="text"
              autoComplete="postal-code"
              required
              maxLength={8}
              placeholder="GU1 4TE"
              aria-invalid={Boolean(state.errors?.postcode)}
              aria-describedby={
                state.errors?.postcode ? "quote-postcode-error" : undefined
              }
              className={cn(
                inputClass,
                "uppercase",
                state.errors?.postcode && "border-danger/60",
              )}
            />
            {state.errors?.postcode ? (
              <p
                id="quote-postcode-error"
                className="mt-1.5 text-[11px] text-[#ffb9a9]"
              >
                {state.errors.postcode}
              </p>
            ) : null}
          </div>

          <div>
            <label className={labelClass} htmlFor="quote-service">
              Service <span className="text-volt">*</span>
            </label>
            <div className="relative">
              <select
                id="quote-service"
                name="service"
                required
                defaultValue=""
                aria-invalid={Boolean(state.errors?.service)}
                aria-describedby={
                  state.errors?.service ? "quote-service-error" : undefined
                }
                className={cn(
                  inputClass,
                  "appearance-none pr-10 [color-scheme:dark]",
                  state.errors?.service && "border-danger/60",
                )}
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.shortTitle}>
                    {service.shortTitle}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
              <CaretDown
                size={15}
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-paper/45"
              />
            </div>
            {state.errors?.service ? (
              <p
                id="quote-service-error"
                className="mt-1.5 text-[11px] text-[#ffb9a9]"
              >
                {state.errors.service}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-4">
          <label className={labelClass} htmlFor="quote-details">
            Anything else? <span className="font-normal text-paper/35">(optional)</span>
          </label>
          <textarea
            id="quote-details"
            name="details"
            rows={2}
            maxLength={1200}
            placeholder="Tell us what's happening, or when you'd like us to visit."
            className={cn(inputClass, "h-auto resize-none py-3 leading-6")}
          />
        </div>

        <div className="sr-only" aria-hidden="true">
          <label htmlFor="quote-company">Company</label>
          <input
            id="quote-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="mt-4">
          <label className="flex cursor-pointer items-start gap-3 text-[12px] leading-5 text-paper/55">
            <input
              type="checkbox"
              name="consent"
              required
              aria-invalid={Boolean(state.errors?.consent)}
              aria-describedby={
                state.errors?.consent ? "quote-consent-error" : undefined
              }
              className="mt-0.5 size-4 shrink-0 rounded border-white/20 bg-white/10 accent-volt"
            />
            <span>
              I&apos;m happy for VoltCraft to contact me about this request. No
              marketing, ever.
            </span>
          </label>
          {state.errors?.consent ? (
            <p
              id="quote-consent-error"
              className="mt-1.5 text-[11px] text-[#ffb9a9]"
            >
              {state.errors.consent}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="btn-sheen mt-5 inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-volt px-6 text-[15px] font-semibold text-ink transition-[transform,background-color] duration-300 hover:bg-volt-bright active:translate-y-px disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? (
            <>
              <span
                aria-hidden="true"
                className="size-4 animate-spin rounded-full border-2 border-ink/25 border-t-ink"
              />
              Sending your request
            </>
          ) : (
            <>
              Get my free quote
              <ArrowRight size={17} weight="bold" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] text-paper/38">
          <ShieldCheck size={14} aria-hidden="true" />
          No call-out fee · No obligation · We never share your details
        </p>
      </form>
    </div>
  );
}
