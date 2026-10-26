import {
  ArrowUpRight,
  GoogleLogo,
  Quotes,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarRating } from "@/components/ui/StarRating";
import { reviews, site } from "@/data/site";

function ReviewSource({
  source,
  tone = "light",
}: {
  source: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] ${
        tone === "dark"
          ? "border-white/15 text-paper/45"
          : "border-ink/15 text-muted"
      }`}
    >
      {source === "Google" ? (
        <GoogleLogo
          size={12}
          weight="fill"
          className="text-[#4285F4]"
          aria-hidden="true"
        />
      ) : (
        <SealCheck size={12} weight="fill" className="text-volt" aria-hidden="true" />
      )}
      {source} review
    </span>
  );
}

export function Testimonials() {
  const featured = reviews.find((review) => review.featured) ?? reviews[0];
  const others = reviews.filter((review) => review !== featured);

  return (
    <section id="reviews" className="section-y relative overflow-hidden bg-chalk">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              title="Neighbours, not strangers."
              body="The best part of a local trade is the repeat calls. Here's what people say after we've packed up."
            />

            <div className="shrink-0 rounded-2xl border border-ink/10 bg-paper p-5 sm:min-w-[250px]">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-medium leading-none tracking-[-0.06em] text-ink">
                  {site.rating}
                </span>
                <div>
                  <StarRating rating={5} size={13} />
                  <p className="mt-1 text-[10px] text-muted">
                    {site.reviewCount} verified reviews
                  </p>
                </div>
              </div>
              <a
                href={site.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-medium text-ink transition-colors hover:text-ink/60"
              >
                Read all reviews
                <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <figure className="relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-ink p-7 text-paper sm:p-9">
              <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-40" />
              <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full bg-volt/10 blur-[60px]" />
              <div className="relative flex items-start justify-between gap-4">
                <Quotes
                  size={34}
                  weight="fill"
                  className="text-volt"
                  aria-hidden="true"
                />
                <StarRating rating={featured.rating} size={12} />
              </div>

              <blockquote className="relative mt-10">
                <p className="max-w-[24ch] text-[clamp(1.5rem,2.7vw,2.15rem)] font-medium leading-[1.12] tracking-[-0.045em] text-paper">
                  &ldquo;{featured.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="relative mt-10 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="text-[13px] font-medium text-paper/85">
                    {featured.name}
                  </p>
                  <p className="mt-1 text-[10px] text-paper/40">
                    {featured.location} · {featured.service}
                  </p>
                </div>
                <ReviewSource source={featured.source} tone="dark" />
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-4 lg:col-span-7">
            {others.map((review, index) => (
              <Reveal key={review.name} delay={0.08 + index * 0.06}>
                <figure className="flex h-full flex-col justify-between rounded-[1.75rem] border border-ink/10 bg-paper p-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-soft sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <StarRating rating={review.rating} size={13} />
                    <ReviewSource source={review.source} />
                  </div>
                  <blockquote className="mt-6">
                    <p className="max-w-[58ch] text-[clamp(1.1rem,1.8vw,1.35rem)] font-medium leading-[1.35] tracking-[-0.025em] text-ink">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-4">
                    <div>
                      <p className="text-[12px] font-medium text-ink">{review.name}</p>
                      <p className="mt-0.5 text-[10px] text-muted">
                        {review.location} · {review.service}
                      </p>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink/25">
                      Verified
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
