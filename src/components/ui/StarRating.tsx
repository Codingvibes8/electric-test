import { Star } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function StarRating({
  rating = 5,
  size = 14,
  className,
}: {
  rating?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          weight={index < Math.round(rating) ? "fill" : "regular"}
          aria-hidden="true"
          className={index < Math.round(rating) ? "text-volt" : "text-line"}
        />
      ))}
    </span>
  );
}
