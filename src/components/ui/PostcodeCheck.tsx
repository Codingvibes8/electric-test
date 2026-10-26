"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { coveredOutwardCodes, site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

type CheckResult =
  | { kind: "covered"; code: string }
  | { kind: "outside"; code: string }
  | { kind: "invalid" }
  | null;

export function PostcodeCheck() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<CheckResult>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalised = postcode.toUpperCase().replace(/\s+/g, "");
    const match = normalised.match(/^([A-Z]{1,2}\d{1,2})/);

    if (!match) {
      setResult({ kind: "invalid" });
      return;
    }

    const outward = match[1];
    if (coveredOutwardCodes.includes(outward)) {
      setResult({ kind: "covered", code: outward });
    } else {
      setResult({ kind: "outside", code: outward });
    }
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="postcode-check"
          className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-muted"
        >
          Check your postcode
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <MapPin
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              id="postcode-check"
              type="text"
              inputMode="text"
              autoComplete="postal-code"
              maxLength={8}
              value={postcode}
              onChange={(event) => {
                setPostcode(event.target.value);
                if (result) setResult(null);
              }}
              placeholder="e.g. GU1 4TE"
              className="h-12 w-full rounded-xl border border-ink/12 bg-chalk pl-10 pr-4 text-[14px] uppercase text-ink outline-none transition-colors placeholder:normal-case placeholder:text-muted/60 focus:border-ink/40 focus:ring-2 focus:ring-volt/25"
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-5 text-[12px] font-semibold text-paper transition-colors hover:bg-ink-soft active:translate-y-px"
          >
            Check
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </form>

      <div aria-live="polite" className="mt-3 min-h-[46px]">
        {result?.kind === "covered" ? (
          <div className="flex items-start gap-2.5 rounded-xl border border-[#2d5a3a]/15 bg-[#e7efe6] px-3.5 py-3 text-[12px] leading-5 text-[#224a32]">
            <CheckCircle
              size={17}
              weight="fill"
              aria-hidden="true"
              className="mt-0.5 shrink-0"
            />
            <p>
              <strong className="font-semibold">{result.code}</strong> is on our
              patch. We can usually be with you the same day.
            </p>
          </div>
        ) : result?.kind === "outside" ? (
          <div className="flex items-start gap-2.5 rounded-xl border border-ink/10 bg-chalk px-3.5 py-3 text-[12px] leading-5 text-muted">
            <MapPin size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-ink" />
            <p>
              {result.code} isn&apos;t on our regular route, but we can often
              still help. Call{" "}
              <a
                href={phoneHref(site.phone)}
                className="font-medium text-ink underline underline-offset-2"
              >
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>
        ) : result?.kind === "invalid" ? (
          <div className="flex items-start gap-2.5 rounded-xl border border-danger/20 bg-[#f6e6e0] px-3.5 py-3 text-[12px] leading-5 text-danger">
            <Phone size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
            <p>That doesn&apos;t look like a UK postcode. Try GU1 4TE, or call us.</p>
          </div>
        ) : (
          <p className="px-1 text-[11px] text-muted">
            We cover GU1–GU5, GU6, GU7, GU9, GU21 and GU27.
          </p>
        )}
      </div>
    </div>
  );
}
