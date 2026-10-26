import {
  ArrowUpRight,
  EnvelopeSimple,
  GoogleLogo,
  MapPin,
  Phone,
  SealCheck,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/ui/Logo";
import { StarRating } from "@/components/ui/StarRating";
import { areas, services, site } from "@/data/site";
import { phoneHref } from "@/lib/utils";

const companyLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Our work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Guide prices" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-30" />

      <div className="container-page relative pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-[38ch] text-[13px] leading-6 text-paper/45">
              Certified electrical work for Guildford homes. One local team,
              fixed prices, and safety you don&apos;t have to think about.
            </p>

            <address className="mt-7 space-y-3 not-italic">
              <a
                href={phoneHref(site.phone)}
                className="flex items-center gap-3 text-[13px] text-paper/75 transition-colors hover:text-volt"
              >
                <span className="grid size-8 place-items-center rounded-full bg-white/[0.05] text-volt">
                  <Phone size={14} weight="fill" aria-hidden="true" />
                </span>
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-[13px] text-paper/60 transition-colors hover:text-paper"
              >
                <span className="grid size-8 place-items-center rounded-full bg-white/[0.05] text-volt">
                  <EnvelopeSimple size={14} weight="fill" aria-hidden="true" />
                </span>
                {site.email}
              </a>
              <p className="flex items-start gap-3 text-[13px] leading-6 text-paper/60">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-white/[0.05] text-volt">
                  <MapPin size={14} weight="fill" aria-hidden="true" />
                </span>
                {site.address}, {site.postcode}
              </p>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/35">
                Services
              </h2>
              <ul className="mt-4 space-y-2.5">
                {services.map((service) => (
                  <li key={service.id}>
                    <a
                      href="#quote"
                      className="text-[12px] text-paper/60 transition-colors hover:text-paper"
                    >
                      {service.shortTitle}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#quote"
                    className="text-[12px] text-paper/60 transition-colors hover:text-paper"
                  >
                    Testing &amp; certification
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/35">
                Areas
              </h2>
              <ul className="mt-4 space-y-2.5">
                {areas.map((area) => (
                  <li key={area.name}>
                    <a
                      href="#areas"
                      className="text-[12px] text-paper/60 transition-colors hover:text-paper"
                    >
                      {area.name}{" "}
                      <span className="font-mono text-[9px] text-paper/25">
                        {area.postcode}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/35">
                Company
              </h2>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[12px] text-paper/60 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/sitemap.xml"
                    className="text-[12px] text-paper/60 transition-colors hover:text-paper"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {site.credentials.map((credential) => (
                  <span
                    key={credential}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-paper/40"
                  >
                    <ShieldCheck size={10} className="text-volt" aria-hidden="true" />
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 lg:col-span-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-paper">
                  <GoogleLogo
                    size={21}
                    weight="fill"
                    className="text-[#4285F4]"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-[13px] font-medium text-paper">
                    VoltCraft Electrical
                  </p>
                  <p className="mt-0.5 text-[10px] text-paper/35">
                    Google Business Profile
                  </p>
                </div>
              </div>
              <SealCheck size={20} weight="fill" className="text-volt" aria-hidden="true" />
            </div>

            <div className="mt-5 flex items-center gap-2.5">
              <span className="text-2xl font-medium tracking-[-0.05em]">
                {site.rating}
              </span>
              <StarRating rating={5} size={12} />
              <span className="text-[10px] text-paper/35">
                ({site.reviewCount})
              </span>
            </div>

            <p className="mt-4 text-[11px] leading-5 text-paper/45">
              {site.address}, {site.postcode}
              <br />
              {site.hours} · {site.emergencyHours}
            </p>

            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-[11px] font-medium text-paper/70 transition-colors hover:border-volt/40 hover:text-paper"
            >
              Open in Google Maps
              <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink-soft lg:col-span-7">
            <iframe
              src="https://www.google.com/maps?q=42+North+Street,+Guildford,+Surrey+GU1+4TE&z=13&output=embed"
              title="Map showing VoltCraft Electrical's Guildford service area"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 grayscale-[0.35] contrast-[1.05]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-3 bg-gradient-to-b from-ink/80 to-transparent p-4">
              <span className="rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/70 backdrop-blur-md">
                Service area map
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-paper/35">
                Guildford · Surrey
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-[10px] text-paper/30 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} VoltCraft Electrical. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>NICEIC approved · Part P registered</span>
            <span className="hidden size-1 rounded-full bg-paper/20 sm:block" />
            <a
              href={`mailto:${site.email}?subject=Privacy%20policy%20request`}
              className="transition-colors hover:text-paper/60"
            >
              Privacy
            </a>
            <a
              href={`mailto:${site.email}?subject=Website%20enquiry`}
              className="transition-colors hover:text-paper/60"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
