import { cn } from "@/lib/utils";

export function SectionHeader({
  number,
  title,
  body,
  tone = "dark",
  className,
  align = "left",
}: {
  number?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {number ? (
        <div
          className={cn(
            "mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em]",
            tone === "light" ? "text-paper/45" : "text-muted",
          )}
        >
          <span>{number}</span>
          <span
            className={cn(
              "h-px w-10",
              tone === "light" ? "bg-paper/25" : "bg-ink/20",
            )}
          />
        </div>
      ) : null}
      <h2
        className={cn(
          "max-w-[18ch] text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.055em]",
          tone === "light" ? "text-paper" : "text-ink",
          align === "center" && "max-w-[22ch]",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-6 max-w-[52ch] text-[15px] leading-7 sm:text-base",
            tone === "light" ? "text-paper/60" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
