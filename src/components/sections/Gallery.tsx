import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const projects = [
  {
    image: "/images/ev-charger.jpg",
    alt: "Wall-mounted smart EV charger installed on a brick house",
    title: "Smart EV charger",
    location: "Woking · GU21",
    tag: "EV charging",
  },
  {
    image: "/images/garden-lighting.jpg",
    alt: "Garden path illuminated by newly installed low-level lighting",
    title: "Garden lighting circuit",
    location: "Godalming · GU7",
    tag: "Outdoor lighting",
  },
  {
    image: "/images/kitchen-lighting.jpg",
    alt: "Kitchen ceiling with neat recessed downlights",
    title: "Kitchen lighting",
    location: "Guildford · GU2",
    tag: "Lighting",
  },
  {
    image: "/images/testing.jpg",
    alt: "Electrician testing an installation with specialist test equipment",
    title: "Test & certification",
    location: "Farnham · GU9",
    tag: "Testing",
  },
  {
    image: "/images/ev-install.jpg",
    alt: "EV charging point installed neatly inside a garage",
    title: "Garage charger",
    location: "Cranleigh · GU6",
    tag: "EV charging",
  },
];

function ProjectCard({
  project,
  className,
  priority = false,
}: {
  project: (typeof projects)[number];
  className?: string;
  priority?: boolean;
}) {
  return (
    <a
      href="#quote"
      aria-label={`${project.title}, ${project.location}. Get a free quote.`}
      className={`group relative block overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink ${className ?? ""}`}
    >
      <Image
        src={project.image}
        alt={project.alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-volt">
            {project.tag}
          </span>
          <p className="mt-1 text-[13px] font-medium text-paper">{project.title}</p>
          <p className="mt-0.5 text-[10px] text-paper/50">{project.location}</p>
        </div>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/20 bg-ink/40 text-paper backdrop-blur-md transition-colors duration-300 group-hover:bg-volt group-hover:text-ink">
          <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

export function Gallery() {
  return (
    <section id="projects" className="section-y relative overflow-hidden bg-chalk">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              number="02"
              title="Recent work, close up."
              body="Real installs, real homes, no stock-photo staging. A snapshot of the jobs our customers let us photograph."
            />
            <a
              href="#quote"
              className="inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-full border border-ink/15 px-5 text-[12px] font-medium text-ink transition-colors hover:border-ink/35 hover:bg-paper lg:self-auto"
            >
              Start your project
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <BeforeAfter />
          </Reveal>

          <Reveal
            delay={0.07}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:h-full lg:grid-cols-1 lg:grid-rows-2"
          >
            <ProjectCard
              project={projects[0]}
              className="h-full min-h-[220px] sm:min-h-[280px] lg:min-h-[240px]"
            />
            <ProjectCard
              project={projects[1]}
              className="h-full min-h-[220px] sm:min-h-[280px] lg:min-h-[240px]"
            />
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(2).map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <ProjectCard
                project={project}
                className="aspect-[4/3] sm:aspect-[5/4]"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-ink/10 pt-5 text-[11px] text-muted sm:flex-row sm:items-center">
            <p>Every project completed by our own employed electricians.</p>
            <p className="font-mono uppercase tracking-[0.14em] text-ink/40">
              Guildford · Godalming · Woking · Farnham · Cranleigh · Haslemere
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
