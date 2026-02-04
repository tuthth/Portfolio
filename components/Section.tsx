import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  align = "left"
}: SectionProps) {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className="section-padding py-20 md:py-28 border-t border-white/5"
      aria-labelledby={`${id}-title`}
    >
      <div className="section-max-width">
        <header
          className={`mb-10 md:mb-14 ${
            isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
          }`}
        >
          {eyebrow && (
            <p className="text-xs tracking-[0.3em] uppercase text-accentSoft mb-4">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-title`}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
        <div className="text-sm md:text-base leading-relaxed text-zinc-200">
          {children}
        </div>
      </div>
    </section>
  );
}

