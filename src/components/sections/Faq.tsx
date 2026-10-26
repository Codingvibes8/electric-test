import { ArrowUpRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs, site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

export function Faq() {
  return (
    <section id="faq" className="section-y relative overflow-hidden bg-chalk">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                title="The questions we get asked most."
                body="Straight answers, no small print. If yours isn't here, pick up the phone — a real electrician will answer."
              />

              <div className="mt-8 rounded-2xl border border-ink/10 bg-paper p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                      Ask a human
                    </p>
                    <a
                      href={phoneHref(site.phone)}
                      className="mt-3 block text-2xl font-medium tracking-[-0.05em] text-ink transition-colors hover:text-ink/60"
                    >
                      {site.phoneDisplay}
                    </a>
                    <p className="mt-2 text-[11px] text-muted">
                      {site.hours} · {site.emergencyHours}
                    </p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-volt">
                    <Phone size={18} weight="fill" aria-hidden="true" />
                  </span>
                </div>
                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-1.5 border-t border-ink/10 pt-4 text-[11px] font-medium text-ink transition-colors hover:text-ink/60"
                >
                  Or send a message
                  <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                <span className="size-1.5 rounded-full bg-volt" />
                NICEIC approved · Part P registered · £5m insured
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
