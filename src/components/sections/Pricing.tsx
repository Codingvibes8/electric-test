import {
  ArrowUpRight,
  Check,
  Lightning,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricing } from "@/data/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="section-y relative overflow-hidden bg-paper-deep">
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-1/3 size-[500px] rounded-full bg-volt/10 blur-[130px]" />

      <div className="container-page relative">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              number="03"
              title="No guesswork. No surprises."
              body="Guide prices for the jobs we're asked for most. Every one is confirmed in writing after a free survey — and the quote is the quote."
            />
            <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-ink/10 bg-chalk/70 px-4 py-2.5 text-[10px] text-muted">
              <ShieldCheck size={15} className="text-ink" weight="fill" aria-hidden="true" />
              Prices include VAT
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {pricing.map((plan, index) => {
            const featured = plan.featured;

            return (
              <Reveal
                key={plan.id}
                delay={index * 0.07}
                className={cn("h-full", featured && "lg:-translate-y-3")}
              >
                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-7 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lift sm:p-8",
                    featured
                      ? "border-ink bg-ink text-paper shadow-lift"
                      : "border-ink/10 bg-chalk text-ink",
                  )}
                >
                  {featured ? (
                    <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-35" />
                  ) : null}

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={cn(
                          "font-mono text-[9px] uppercase tracking-[0.16em]",
                          featured ? "text-volt" : "text-muted",
                        )}
                      >
                        {plan.priceLabel === "from" ? "From" : "Guide price"}
                      </p>
                      <h3
                        className={cn(
                          "mt-3 max-w-[16ch] text-[clamp(1.35rem,2.2vw,1.7rem)] font-medium leading-[1.05] tracking-[-0.045em]",
                          featured ? "text-paper" : "text-ink",
                        )}
                      >
                        {plan.name}
                      </h3>
                    </div>
                    {featured ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-volt px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-ink">
                        <Lightning size={11} weight="fill" aria-hidden="true" />
                        Most booked
                      </span>
                    ) : (
                      <span className="font-mono text-[9px] tracking-[0.12em] text-ink/25">
                        /0{index + 1}
                      </span>
                    )}
                  </div>

                  <div className="relative mt-8 flex items-end gap-2">
                    <p
                      className={cn(
                        "text-[clamp(3rem,5vw,4.2rem)] font-medium leading-none tracking-[-0.075em]",
                        featured ? "text-volt" : "text-ink",
                      )}
                    >
                      {plan.price}
                    </p>
                    <span
                      className={cn(
                        "pb-1.5 text-[10px]",
                        featured ? "text-paper/40" : "text-muted",
                      )}
                    >
                      {plan.priceLabel === "from" ? "from" : "standard"}
                    </span>
                  </div>

                  <p
                    className={cn(
                      "mt-4 min-h-[60px] text-[12px] leading-5",
                      featured ? "text-paper/55" : "text-muted",
                    )}
                  >
                    {plan.description}
                  </p>

                  <ul
                    className={cn(
                      "mt-6 space-y-3 border-t pt-6",
                      featured ? "border-white/10" : "border-ink/10",
                    )}
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-start gap-2.5 text-[12px] leading-5",
                          featured ? "text-paper/65" : "text-ink/70",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full",
                            featured
                              ? "bg-volt/15 text-volt"
                              : "bg-paper-deep text-ink",
                          )}
                        >
                          <Check size={9} weight="bold" aria-hidden="true" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#quote"
                    className={cn(
                      "btn-sheen mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-[12px] font-semibold transition-[background-color,transform] duration-300 active:translate-y-px",
                      featured
                        ? "bg-volt text-ink hover:bg-volt-bright"
                        : "bg-ink text-paper hover:bg-ink-soft",
                    )}
                  >
                    Get a free quote
                    <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "EV charger install", price: "from £749" },
              { label: "Extra socket", price: "from £95" },
              { label: "EICR & report", price: "from £150" },
              { label: "Emergency call-out", price: "from £89" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 bg-chalk/80 px-4 py-3.5"
              >
                <span className="text-[11px] text-ink/70">{item.label}</span>
                <span className="font-mono text-[10px] font-medium text-ink">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 text-[10px] leading-5 text-muted">
            Guide prices include VAT and are subject to a free survey. Parts and
            access requirements may affect the final cost, always agreed before
            work starts.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
