import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  HouseLine,
  MapPin,
  Receipt,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

export function Benefits() {
  return (
    <section id="why" className="section-y relative overflow-hidden bg-paper">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            title="Built around your home, not our schedule."
            body="The things that make a trade worth calling back: clear pricing, tidy work, and someone who actually picks up the phone."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="group relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-ink p-7 text-paper sm:p-9">
              <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-40" />
              <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-volt/10 blur-[70px] transition-opacity duration-500 group-hover:opacity-150" />

              <div className="relative flex items-start justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/50">
                  <Receipt size={13} className="text-volt" aria-hidden="true" />
                  Fixed price promise
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-paper/25">
                  /01
                </span>
              </div>

              <div className="relative mt-12 flex items-end justify-between gap-6">
                <div>
                  <p className="text-[clamp(4.5rem,10vw,7.5rem)] font-medium leading-[0.78] tracking-[-0.08em] text-volt">
                    0
                  </p>
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/35">
                    hidden extras
                  </p>
                </div>
                <div className="max-w-[26ch] pb-1">
                  <h3 className="text-[clamp(1.35rem,2.3vw,1.9rem)] font-medium leading-[1.02] tracking-[-0.045em] text-paper">
                    The quote is the quote.
                  </h3>
                  <p className="mt-3 text-[12px] leading-5 text-paper/50">
                    Survey first, written fixed price second. No hourly creep,
                    no mystery line items.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.07} className="lg:col-span-5">
            <div className="group relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-line bg-chalk p-7 sm:p-9">
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-[14px] border border-ink/10 bg-paper text-ink transition-colors duration-300 group-hover:bg-volt">
                  <MapPin size={23} weight="fill" aria-hidden="true" />
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-ink/25">
                  /02
                </span>
              </div>

              <div className="mt-12">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Guildford · {site.postcode}
                </p>
                <h3 className="mt-3 max-w-[18ch] text-[clamp(1.35rem,2.3vw,1.9rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink">
                  One local team, start to finish.
                </h3>
                <p className="mt-3 max-w-[34ch] text-[12px] leading-5 text-muted">
                  Not a national call centre. The person who quotes your job is
                  the person who signs it off.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-4">
            <div className="group relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-line bg-chalk p-7 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-35" />
              <div className="relative flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-[14px] border border-ink/10 bg-paper text-ink transition-colors duration-300 group-hover:bg-volt">
                  <SealCheck size={24} weight="fill" aria-hidden="true" />
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-ink/25">
                  /03
                </span>
              </div>

              <div className="relative mt-12">
                <h3 className="max-w-[16ch] text-[clamp(1.35rem,2.3vw,1.85rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink">
                  Certified, tested, documented.
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {["Every circuit tested", "Certificate in your inbox", "12-month guarantee"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[11px] text-muted"
                      >
                        <Check
                          size={13}
                          weight="bold"
                          className="text-ink"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-8">
            <div className="group relative flex min-h-[350px] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-ink p-7 text-paper sm:p-8">
              <Image
                src="/images/kitchen-lighting.jpg"
                alt="Finished kitchen with neatly installed recessed lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="relative flex items-end justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/45 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/60 backdrop-blur-md">
                    <HouseLine size={13} aria-hidden="true" />
                    Clean finish
                  </span>
                  <h3 className="mt-4 max-w-[20ch] text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-[1.02] tracking-[-0.045em]">
                    We treat your home like our own.
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-[12px] leading-5 text-paper/55">
                    Dust sheets down, cable routes planned, and a tidy finish. You
                    shouldn&apos;t be able to tell we were there — except for the
                    lights.
                  </p>
                </div>
                <a
                  href="#quote"
                  aria-label="Get a free quote"
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-ink/40 text-paper backdrop-blur-md transition-colors hover:bg-volt hover:text-ink"
                >
                  <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
