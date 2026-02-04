import Image from "next/image";
import { Section } from "./Section";

type ProjectCardProps = {
  name: string;
  period: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function ProjectCard({
  name,
  period,
  imageSrc,
  imageAlt,
  description,
  ctaLabel,
  ctaHref
}: ProjectCardProps) {
  return (
    <article className="flex flex-col items-stretch text-center">
      <div className="relative mx-auto h-56 w-full max-w-xs overflow-hidden rounded-3xl border border-white/15 bg-surface/60 shadow-soft">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>
      <div className="mt-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          {period}
        </p>
        <h3 className="text-sm md:text-base font-semibold tracking-tight">
          {name}
        </h3>
        <p className="mx-auto max-w-sm text-xs md:text-sm text-zinc-300">
          {description}
        </p>
      </div>
      {ctaLabel && ctaHref && (
        <div className="mt-5">
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-100 hover:border-accent hover:bg-accent hover:text-black transition"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects that reflect how I think about backend systems."
      subtitle="Visual snapshots of how I design APIs, data flows, and real-world platforms."
    >
      <div className="relative">
        <div className="pointer-events-none absolute -inset-x-6 -top-10 -bottom-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,75,75,0.32),_transparent_55%)] opacity-70" />
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            name="PhoneStore.Inventory"
            period="Dec 2025 – Jan 2026 · Personal Project"
            imageSrc="/projects/phonestore-inventory.jpg"
            imageAlt="Inventory dashboard concept for phone store backend."
            description="Inventory and order management backend with clean architecture, strict stock validation, and Dockerised deployment."
            ctaLabel="View details"
            ctaHref="https://github.com/tuthth/PhoneStore.Inventory"
          />
          <ProjectCard
            name="MES Integrations"
            period="Oct 2025 – Ongoing · SAIGON STEC"
            imageSrc="/projects/mes-integrations.jpg"
            imageAlt="Manufacturing execution system screens and shop floor devices."
            description="MES enhancements connecting production lines, inspection data, and external systems via SQL Server and FTP-based bridges."
          />
          <ProjectCard
            name="On‑Demand Tutor Platform"
            period="Apr 2024 – Aug 2024 · Capstone"
            imageSrc="/projects/ondemand-tutor.jpg"
            imageAlt="Scheduling and session booking interface for tutoring platform."
            description="Tutoring backend with booking flows, VNPay payments, push notifications, and credential verification using OpenCV."
            ctaLabel="Platform overview"
            ctaHref="https://capstone-snowy-one.vercel.app/"
          />
        </div>
        <p className="mt-6 text-[0.7rem] text-center text-muted">
          Place your images in <code>/public/projects</code> with the file names
          used above to complete this section visually.
        </p>
      </div>
    </Section>
  );
}
