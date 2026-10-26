import {
  Clock,
  GoogleLogo,
  SealCheck,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "@/components/ui/CountUp";
import { site } from "@/data/site";

const items = [
  {
    icon: "google",
    label: "Google rating",
    value: site.rating,
    decimals: 1,
    suffix: " / 5",
    detail: `${site.reviewCount} verified reviews`,
  },
  {
    icon: "seal",
    label: "Checkatrade",
    value: site.checkatradeRating,
    decimals: 1,
    suffix: " / 10",
    detail: "Verified local trade",
  },
  {
    icon: "clock",
    label: "Years on the tools",
    value: site.yearsExperience,
    decimals: 0,
    suffix: "",
    detail: "Family-run since 2004",
  },
  {
    icon: "shield",
    label: "Accreditation",
    value: null,
    decimals: 0,
    suffix: "",
    detail: "NICEIC approved · Part P",
    textValue: "NICEIC",
  },
];

export function TrustBar() {
  return (
    <section id="trust" aria-label="Trust and credentials" className="relative">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-px border-x border-b border-line bg-line lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.label}
              className="group relative bg-chalk px-5 py-6 transition-colors duration-300 hover:bg-paper sm:px-7 sm:py-7"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  {item.label}
                </p>
                <span className="grid size-7 place-items-center rounded-full bg-paper text-ink/60 transition-colors duration-300 group-hover:bg-volt group-hover:text-ink">
                  {item.icon === "google" ? (
                    <GoogleLogo
                      size={15}
                      weight="fill"
                      className="text-[#4285F4]"
                      aria-hidden="true"
                    />
                  ) : item.icon === "seal" ? (
                    <SealCheck size={15} weight="fill" aria-hidden="true" />
                  ) : item.icon === "clock" ? (
                    <Clock size={15} weight="fill" aria-hidden="true" />
                  ) : (
                    <ShieldCheck size={15} weight="fill" aria-hidden="true" />
                  )}
                </span>
              </div>

              <p className="mt-5 text-[clamp(2rem,3.2vw,2.8rem)] font-medium leading-none tracking-[-0.06em] text-ink">
                {item.value === null ? (
                  item.textValue
                ) : (
                  <>
                    <CountUp
                      value={item.value}
                      decimals={item.decimals}
                      duration={1.4 + index * 0.08}
                    />
                    {item.suffix ? (
                      <span className="text-[0.45em] font-normal tracking-[-0.02em] text-muted">
                        {item.suffix}
                      </span>
                    ) : null}
                  </>
                )}
              </p>

              <p className="mt-2 text-[11px] leading-5 text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
