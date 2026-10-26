import {
  ArrowRight,
  Check,
  Clock,
  Phone,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps, site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

const quoteSteps = processSteps.slice(0, 3);

export function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden border-b border-line bg-paper-deep"
    >
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-50" />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[460px] rounded-full bg-volt/10 blur-[120px]" />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          <Reveal className="lg:col-span-5 lg:row-start-1">
            <SectionHeader
              title={
                <>
                  A clear quote.
                  <br />
                  <span className="text-ink/40">No surprises.</span>
                </>
              }
              body="Tell us what's wrong or what you're planning. We'll call back, ask the right questions, and give you a fixed price in writing."
            />

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-chalk/70 px-3.5 py-2 text-[11px] text-ink/65">
              <ShieldCheck size={15} className="text-ink" weight="fill" aria-hidden="true" />
              No call-out fee within GU postcodes
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1"
          >
            <QuoteForm />
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5 lg:row-start-2">
            <div className="relative flex flex-col gap-0">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                What happens next
              </p>
              {quoteSteps.map((step, index) => (
                <div key={step.number} className="relative flex gap-4 pb-7 last:pb-0">
                  {index < quoteSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-[17px] top-9 h-[calc(100%-1.5rem)] w-px bg-ink/10"
                    />
                  ) : null}
                  <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 bg-chalk font-mono text-[9px] font-medium text-ink">
                    {step.number}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-[15px] font-medium tracking-[-0.02em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 max-w-[34ch] text-[12px] leading-5 text-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-7 rounded-2xl border border-ink/10 bg-chalk/70 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] text-muted">Prefer to talk?</p>
                    <a
                      href={phoneHref(site.phone)}
                      className="mt-1 block text-xl font-medium tracking-[-0.04em] text-ink transition-colors hover:text-ink/60"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full bg-ink text-volt">
                    <Phone size={18} weight="fill" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/10 pt-3 text-[10px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} aria-hidden="true" />
                    {site.hours}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-volt" />
                    {site.emergencyHours}
                  </span>
                </div>
              </div>

              <a
                href="#pricing"
                className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium text-ink/60 transition-colors hover:text-ink"
              >
                See guide prices
                <ArrowRight size={13} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted lg:col-span-5">
          <span className="inline-flex items-center gap-1.5">
            <Check size={12} weight="bold" className="text-ink" aria-hidden="true" />
            Written fixed price
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check size={12} weight="bold" className="text-ink" aria-hidden="true" />
            No obligation
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check size={12} weight="bold" className="text-ink" aria-hidden="true" />
            Reply within {site.responseWindow}
          </span>
        </div>
      </div>
    </section>
  );
}
