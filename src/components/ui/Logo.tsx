import Link from "next/link";
import { Lightning } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="VoltCraft Electrical home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md",
        className,
      )}
    >
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-[12px] bg-volt text-ink shadow-[0_8px_22px_-12px_rgba(244,182,63,0.9)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6">
        <span className="absolute inset-x-0 top-0 h-1/2 bg-white/20" />
        <Lightning size={22} weight="fill" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[15px] font-semibold tracking-[-0.045em]",
            tone === "light" ? "text-paper" : "text-ink",
          )}
        >
          VOLTCRAFT
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[8px] font-medium uppercase tracking-[0.3em]",
            tone === "light" ? "text-paper/50" : "text-muted",
          )}
        >
          Electrical
        </span>
      </span>
    </Link>
  );
}
