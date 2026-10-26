import { MapPin, NavigationArrow, Phone } from "@phosphor-icons/react/dist/ssr";
import { PostcodeCheck } from "@/components/ui/PostcodeCheck";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { areas, site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

const pins = [
  { name: "Woking", postcode: "GU21", top: "25%", left: "17%" },
  { name: "Cranleigh", postcode: "GU6", top: "16%", left: "58%" },
  { name: "Godalming", postcode: "GU7", top: "60%", left: "73%" },
  { name: "Farnham", postcode: "GU9", top: "74%", left: "24%" },
  { name: "Haslemere", postcode: "GU27", top: "82%", left: "63%" },
];

export function Coverage() {
  return (
    <section id="areas" className="section-y relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" />
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <SectionHeader
              title={
                <>
                  Guildford is home.
                  <br />
                  <span className="text-ink/40">Surrey is the patch.</span>
                </>
              }
              body="We cover Guildford plus five surrounding areas. If you're on the edge of a postcode, call and we'll tell you straight."
            />

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-0">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center justify-between gap-3 border-b border-ink/10 py-3"
                >
                  <span className="flex items-center gap-2 text-[12px] font-medium text-ink">
                    {area.primary ? (
                      <span className="size-1.5 rounded-full bg-volt" aria-hidden="true" />
                    ) : (
                      <span className="size-1.5 rounded-full bg-ink/15" aria-hidden="true" />
                    )}
                    {area.name}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.1em] text-muted">
                    {area.postcode}
                  </span>
                </div>
              ))}
            </div>

            <PostcodeCheck />

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-muted">
              <a
                href={phoneHref(site.phone)}
                className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-ink/60"
              >
                <Phone size={13} aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-volt" />
                {site.emergencyHours}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink text-paper shadow-lift">
              <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-50" />
              <div
                className="pointer-events-none absolute inset-[12%] animate-radar rounded-full bg-[conic-gradient(from_0deg,rgba(244,182,63,0.22),transparent_26%)]"
                aria-hidden="true"
              />

              <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                {[78, 56, 34].map((size) => (
                  <div
                    key={size}
                    className="absolute rounded-full border border-white/10"
                    style={{ width: `${size}%`, height: `${size}%` }}
                  />
                ))}
                <div className="absolute h-px w-[78%] bg-white/8" />
                <div className="absolute h-[78%] w-px bg-white/8" />
              </div>

              <div className="absolute left-5 top-5 font-mono text-[8px] uppercase tracking-[0.18em] text-paper/35">
                Service area / 10 mi
              </div>
              <div className="absolute right-5 top-5 grid size-7 place-items-center rounded-full border border-white/15 font-mono text-[9px] text-paper/50">
                N
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex flex-col items-center">
                  <span className="absolute -inset-4 rounded-full border border-volt/25" />
                  <span className="absolute -inset-8 rounded-full border border-volt/10" />
                  <span className="relative grid size-9 place-items-center rounded-full bg-volt text-ink shadow-volt">
                    <MapPin size={17} weight="fill" aria-hidden="true" />
                  </span>
                  <span className="mt-3 whitespace-nowrap rounded-full border border-white/15 bg-ink/80 px-3 py-1.5 text-center backdrop-blur-md">
                    <span className="block text-[11px] font-medium text-paper">
                      Guildford
                    </span>
                    <span className="mt-0.5 block font-mono text-[7px] uppercase tracking-[0.14em] text-paper/40">
                      GU1–GU5
                    </span>
                  </span>
                </div>
              </div>

              {pins.map((pin) => (
                <div
                  key={pin.name}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ top: pin.top, left: pin.left }}
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full border border-volt/60 bg-volt/20" />
                    <span className="whitespace-nowrap rounded-full border border-white/10 bg-ink/65 px-2 py-1 font-mono text-[7px] tracking-[0.03em] text-paper/55 backdrop-blur-md">
                      {pin.name}{" "}
                      <span className="text-paper/25">{pin.postcode}</span>
                    </span>
                  </div>
                </div>
              ))}

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-full bg-white/[0.06] text-volt">
                    <NavigationArrow size={14} weight="fill" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-paper/30">
                      Based in
                    </p>
                    <p className="mt-0.5 text-[10px] text-paper/65">
                      42 North Street, Guildford
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[8px] tracking-[0.12em] text-paper/25">
                  GU1 4TE
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
