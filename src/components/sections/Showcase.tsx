import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  FileText,
  SealCheck,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const standards = [
  "Every circuit tested",
  "RCBO protection throughout",
  "Labelled and documented",
  "Tidy, planned cable routes",
];

export function Showcase() {
  return (
    <section id="standard" className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/fuse-board.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/40" />
        <div className="absolute inset-0 bg-blueprint-dark opacity-50" />
      </div>

      <div className="container-page section-y relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <SectionHeader
              tone="light"
              title={
                <>
                  The part you don&apos;t see is the part we obsess over.
                </>
              }
              body="Cable routes, torque settings, circuit labels, test results. The details that keep your home safe long after the van has gone."
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {standards.map((standard) => (
                <li
                  key={standard}
                  className="flex items-center gap-3 border-b border-white/10 pb-3 text-[13px] text-paper/65"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-volt/30 bg-volt/10 text-volt">
                    <Check size={12} weight="bold" aria-hidden="true" />
                  </span>
                  {standard}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#quote"
                className="btn-sheen group inline-flex h-13 items-center gap-2.5 rounded-full bg-volt px-6 text-sm font-semibold text-ink transition-[background-color,transform] duration-300 hover:bg-volt-bright active:translate-y-px"
              >
                Get a free quote
                <ArrowUpRight
                  size={17}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#projects"
                className="inline-flex h-13 items-center rounded-full border border-white/15 px-6 text-sm font-medium text-paper/70 transition-colors hover:border-white/30 hover:text-paper"
              >
                See recent work
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative lg:col-span-5 lg:col-start-8">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2.1rem] border border-white/8" />
              <div className="glass-dark relative overflow-hidden rounded-[1.75rem] p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src="/images/testing.jpg"
                    alt="Electrician completing a test and inspection on a domestic installation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/55 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/60 backdrop-blur-md">
                    Test &amp; inspect
                  </span>
                </div>

                <div className="p-2 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/35">
                        Commissioning sheet
                      </p>
                      <p className="mt-1.5 text-lg font-medium tracking-[-0.03em]">
                        Every result, in writing.
                      </p>
                    </div>
                    <SealCheck
                      size={28}
                      weight="fill"
                      className="shrink-0 text-volt"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                    {[
                      { value: "18th", label: "Edition" },
                      { value: "100%", label: "Tested" },
                      { value: "PDF", label: "Certificate" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-ink/70 px-3 py-3 text-center">
                        <span className="block text-sm font-medium tracking-[-0.03em] text-paper">
                          {stat.value}
                        </span>
                        <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.12em] text-paper/35">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] text-paper/40">
                    <span className="inline-flex items-center gap-2">
                      <FileText size={13} aria-hidden="true" />
                      Sent before we leave
                    </span>
                    <span className="font-mono uppercase tracking-[0.12em] text-paper/25">
                      VoltCraft / GU
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-volt p-4 text-ink shadow-volt sm:-left-7">
                <span className="block text-3xl font-semibold leading-none tracking-[-0.06em]">
                  12
                </span>
                <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.14em] text-ink/60">
                  month guarantee
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              {
                icon: <ShieldCheck size={18} weight="fill" aria-hidden="true" />,
                label: "NICEIC approved",
                detail: "Assessed, audited, accountable",
              },
              {
                icon: <SealCheck size={18} weight="fill" aria-hidden="true" />,
                label: "Part P registered",
                detail: "Notifiable work, properly logged",
              },
              {
                icon: <FileText size={18} weight="fill" aria-hidden="true" />,
                label: "Certified every time",
                detail: "Test results and certificates",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-ink/70 p-5 sm:p-6">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-volt/10 text-volt">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[13px] font-medium text-paper/85">{item.label}</p>
                  <p className="mt-0.5 text-[11px] text-paper/40">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
