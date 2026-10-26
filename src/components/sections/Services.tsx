import Image from "next/image";
import {
  ArrowUpRight,
  BatteryCharging,
  Circuitry,
  HouseLine,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services, type Service } from "@/data/site";
import { cn } from "@/lib/utils";

function ServiceIcon({
  icon,
  size = 24,
  className,
}: {
  icon: Service["icon"];
  size?: number;
  className?: string;
}) {
  if (icon === "lightning") {
    return <Lightning size={size} weight="fill" className={className} aria-hidden="true" />;
  }
  if (icon === "circuitry") {
    return <Circuitry size={size} weight="bold" className={className} aria-hidden="true" />;
  }
  if (icon === "house") {
    return <HouseLine size={size} weight="bold" className={className} aria-hidden="true" />;
  }
  return (
    <BatteryCharging
      size={size}
      weight="fill"
      className={className}
      aria-hidden="true"
    />
  );
}

function ServiceCard({ service }: { service: Service }) {
  const isDark = service.id === "emergency";
  const hasImage = Boolean(service.image);

  return (
    <a
      href="#quote"
      className={cn(
        "group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.75rem] border p-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lift sm:p-8 lg:min-h-[340px]",
        isDark
          ? "border-white/10 bg-ink text-paper"
          : "border-line bg-chalk text-ink",
      )}
    >
      {hasImage ? (
        <>
          <Image
            src={service.image ?? ""}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className={cn(
              "object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]",
              service.id === "emergency"
                ? "opacity-30"
                : "opacity-100 sm:left-auto sm:w-[46%]",
            )}
          />
          <div
            className={cn(
              "absolute inset-0",
              service.id === "emergency"
                ? "bg-gradient-to-r from-ink via-ink/85 to-ink/40"
                : "bg-gradient-to-r from-chalk via-chalk/95 to-chalk/20 sm:via-chalk/90 sm:to-transparent",
            )}
          />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" />
      )}

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className={cn(
              "grid size-12 place-items-center rounded-[14px] border transition-colors duration-300",
              isDark
                ? "border-white/10 bg-white/[0.06] text-volt group-hover:bg-volt group-hover:text-ink"
                : "border-ink/10 bg-paper text-ink group-hover:bg-volt",
            )}
          >
            <ServiceIcon icon={service.icon} size={23} />
          </span>
          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em]",
                isDark
                  ? "border-white/10 bg-white/[0.04] text-paper/50"
                  : "border-line bg-paper/60 text-muted",
              )}
            >
              {service.badge}
            </span>
            <span
              className={cn(
                "font-mono text-[9px] tracking-[0.12em]",
                isDark ? "text-paper/25" : "text-ink/25",
              )}
            >
              /{service.number}
            </span>
          </div>
        </div>

        <div className="mt-auto pt-12">
          <div className="flex items-end justify-between gap-4">
            <h3 className="max-w-[15ch] text-[clamp(1.45rem,2.4vw,2rem)] font-medium leading-[1.03] tracking-[-0.045em]">
              {service.title}
            </h3>
            <span
              className={cn(
                "shrink-0 pb-1 text-right",
                isDark ? "text-paper/40" : "text-muted",
              )}
            >
              <span className="block font-mono text-[8px] uppercase tracking-[0.14em]">
                From
              </span>
              <span
                className={cn(
                  "mt-0.5 block text-lg font-medium tracking-[-0.04em]",
                  isDark ? "text-paper" : "text-ink",
                )}
              >
                {service.from}
              </span>
            </span>
          </div>

          <p
            className={cn(
              "mt-3 max-w-[48ch] text-[13px] leading-6",
              isDark ? "text-paper/55" : "text-muted",
            )}
          >
            {service.description}
          </p>

          <div
            className={cn(
              "mt-6 flex items-center justify-between border-t pt-4",
              isDark ? "border-white/10" : "border-ink/10",
            )}
          >
            <span
              className={cn(
                "text-[11px] font-medium",
                isDark ? "text-paper/60" : "text-ink/60",
              )}
            >
              Get a free quote
            </span>
            <span
              className={cn(
                "grid size-8 place-items-center rounded-full transition-[transform,background-color,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                isDark
                  ? "bg-white/[0.06] text-paper/60 group-hover:bg-volt group-hover:text-ink"
                  : "bg-paper text-ink/55 group-hover:bg-ink group-hover:text-paper",
              )}
            >
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function Services() {
  return (
    <section id="services" className="section-y relative overflow-hidden bg-paper">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            number="01"
            title="Four things we do exceptionally well."
            body="From a fuse board at midnight to an EV charger on a Saturday morning. One local team, one standard — and a written price before we start."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:gap-5">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.07}
              className={cn(
                index === 0 && "lg:col-span-7",
                index === 1 && "lg:col-span-5",
                index === 2 && "lg:col-span-5",
                index === 3 && "lg:col-span-7",
              )}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-line pt-5 text-[11px] text-muted sm:flex-row sm:items-center">
            <p>
              Every job is tested, certified, and covered by our workmanship
              guarantee.
            </p>
            <p className="font-mono uppercase tracking-[0.14em]">
              NICEIC · Part P · £5m insured
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
