import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  Phone,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <Image
        src="/images/home-night.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
      <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 size-[520px] rounded-full bg-volt/10 blur-[130px]" />

      <div className="container-page relative section-y">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/55">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-volt" />
                <span className="relative inline-flex size-1.5 rounded-full bg-volt" />
              </span>
              Emergency line open
            </p>
            <h2 className="max-w-[15ch] text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[0.96] tracking-[-0.06em] text-paper">
              Power problems don&apos;t keep office hours.
            </h2>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-7 text-paper/55">
              Neither do we. Call the emergency line any time, or book a free
              quote for planned work. A real electrician answers, not a call
              centre.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/35">
              <span className="inline-flex items-center gap-2">
                <Clock size={13} className="text-volt" aria-hidden="true" />
                {site.emergencyHours}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={13} className="text-volt" aria-hidden="true" />
                Fixed quotes, always
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="glass-dark relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt/80 to-transparent" />
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/40">
                24/7 emergency line
              </p>
              <a
                href={phoneHref(site.phone)}
                className="group mt-4 flex items-center justify-between gap-4 border-b border-white/10 pb-6"
              >
                <span className="text-[clamp(1.5rem,2.8vw,2.1rem)] font-medium tracking-[-0.05em] text-paper transition-colors group-hover:text-volt">
                  {site.phoneDisplay}
                </span>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-volt text-ink transition-transform duration-300 group-hover:rotate-6">
                  <Phone size={18} weight="fill" aria-hidden="true" />
                </span>
              </a>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#quote"
                  className="btn-sheen inline-flex h-12 items-center justify-center gap-2 rounded-full bg-paper px-5 text-[13px] font-semibold text-ink transition-colors hover:bg-white"
                >
                  Get a free quote
                  <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                </a>
                <p className="text-center text-[10px] text-paper/35">
                  {site.hours} for planned work · No obligation
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-[10px] text-paper/50">
                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-paper/25">
                    Emergency response
                  </p>
                  <p className="mt-1 text-paper/70">{site.emergencyResponse} average</p>
                </div>
                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-paper/25">
                    Callback
                  </p>
                  <p className="mt-1 text-paper/70">Within {site.responseWindow}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
