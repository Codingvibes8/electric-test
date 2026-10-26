import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  GoogleLogo,
  Phone,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { StarRating } from "@/components/ui/StarRating";
import { site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className="grain relative overflow-hidden bg-ink text-paper"
    >
      <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-70" />
      <div className="pointer-events-none absolute -right-40 -top-56 size-[680px] rounded-full bg-volt/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-64 left-1/4 size-[520px] rounded-full bg-[#1e5d4c]/20 blur-[130px]" />

      <div className="container-page relative z-10">
        <div className="grid items-center gap-12 pb-16 pt-12 lg:min-h-[calc(100svh-6.75rem)] lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-16">
          <div className="flex flex-col justify-center lg:col-span-7 lg:pr-8">
            <div className="hero-enter flex flex-wrap items-center gap-3" style={{ "--delay": "60ms" } as React.CSSProperties}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-paper/65">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-volt" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-volt" />
                </span>
                NICEIC approved · Guildford
              </span>
              <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/35 sm:flex">
                <ShieldCheck size={13} className="text-volt" aria-hidden="true" />
                Part P registered
              </span>
            </div>

            <h1
              className="hero-enter mt-7 max-w-[13ch] text-[clamp(2.85rem,6.5vw,5.15rem)] font-medium leading-[0.94] tracking-[-0.06em] text-paper"
              style={{ "--delay": "150ms" } as React.CSSProperties}
            >
              Guildford electricians,{" "}
              <span className="text-volt">done properly.</span>
            </h1>

            <p
              className="hero-enter mt-7 max-w-[46ch] text-[16px] leading-7 text-paper/62 sm:text-[17px] sm:leading-8"
              style={{ "--delay": "260ms" } as React.CSSProperties}
            >
              Emergency call-outs, fuse boards, rewires and EV chargers.
              NICEIC-approved, fixed-price, and 22 years on the tools.
            </p>

            <div
              className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--delay": "360ms" } as React.CSSProperties}
            >
              <a
                href="#quote"
                className="btn-sheen group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-volt px-7 text-[15px] font-semibold text-ink shadow-volt transition-[background-color,transform] duration-300 hover:bg-volt-bright active:translate-y-px"
              >
                Get a free quote
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={phoneHref(site.phone)}
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-6 text-[15px] font-medium text-paper transition-colors duration-300 hover:border-volt/40 hover:bg-white/[0.06]"
              >
                <span className="grid size-8 place-items-center rounded-full bg-volt/12 text-volt transition-colors group-hover:bg-volt group-hover:text-ink">
                  <Phone size={16} weight="fill" aria-hidden="true" />
                </span>
                <span>{site.phoneDisplay}</span>
              </a>
            </div>

          </div>

          <div className="relative lg:col-span-5">
            <div
              className="hero-enter relative"
              style={{ "--delay": "300ms" } as React.CSSProperties}
            >
              <div className="absolute -inset-3 rounded-[2.2rem] border border-white/8" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-ink-soft shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
                <div className="relative aspect-[4/5] min-h-[430px] sm:min-h-[540px] lg:min-h-[610px]">
                  <Image
                    src="/images/hero-electrician.jpg"
                    alt="NICEIC-approved electrician testing a consumer unit in a Guildford home"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-[92%_center] transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/55 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/75 backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-[#78d39a] animate-pulse-dot" />
                      On shift now
                    </span>
                    <div className="grid size-[74px] -rotate-6 place-items-center rounded-full bg-volt text-ink shadow-volt sm:size-[86px]">
                      <span className="text-center leading-none">
                        <span className="block text-[21px] font-semibold tracking-[-0.06em] sm:text-[25px]">
                          24/7
                        </span>
                        <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.16em] sm:text-[8px]">
                          emergency
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <div className="glass-dark flex items-center justify-between gap-4 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-paper">
                          <GoogleLogo
                            size={20}
                            weight="fill"
                            className="text-[#4285F4]"
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold tracking-[-0.03em] text-paper">
                              {site.rating}
                            </span>
                            <StarRating rating={5} size={11} />
                          </div>
                          <p className="mt-0.5 text-[11px] text-paper/45">
                            {site.reviewCount} Google reviews
                          </p>
                        </div>
                      </div>
                      <span className="hidden border-l border-white/10 pl-4 text-right sm:block">
                        <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-paper/35">
                          Response
                        </span>
                        <span className="mt-1 block text-[12px] font-medium text-paper/80">
                          60 min avg.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 right-4 hidden items-center gap-2 rounded-full border border-white/10 bg-ink-soft/95 px-3.5 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/40 backdrop-blur-md sm:flex lg:-right-4">
                <span className="size-1 rounded-full bg-volt" />
                Guildford · Surrey · 51.2362° N
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#trust"
        aria-label="Scroll to trust and reviews"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center justify-center text-paper/30 transition-colors hover:text-volt lg:flex"
      >
        <ArrowDown size={17} aria-hidden="true" />
      </a>
    </section>
  );
}
