import { Section } from "./Section";

type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

function ExperienceItem({
  role,
  company,
  period,
  location,
  highlights
}: ExperienceItemProps) {
  return (
    <article className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] py-6 border-t border-white/5">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {period}
        </p>
        <h3 className="mt-2 text-sm font-semibold">{role}</h3>
        <p className="text-sm text-zinc-300">{company}</p>
        <p className="mt-1 text-xs text-muted">{location}</p>
      </header>
      <ul className="space-y-2 text-sm text-zinc-200">
        {highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[0.45rem] h-[3px] w-3 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="From factory floors to flight decks."
      subtitle="Hands-on experience maintaining legacy systems while shipping new services in production environments."
    >
      <div className="space-y-4">
        <ExperienceItem
          role="MES Developer"
          company="SAIGON STEC CO., LTD."
          period="Oct 2025 – Present"
          location="Ho Chi Minh City, Vietnam"
          highlights={[
            "Maintain and enhance large-scale Manufacturing Execution Systems (MES) supporting high-volume production lines.",
            "Refactor legacy VB.NET modules to improve performance, reliability, and long-term maintainability.",
            "Design and optimise SQL Server data models and stored procedures processing production logs and inspection data.",
            "Integrate secondary PHP-based MES components and file-based (FTP) data flows with existing workflows.",
            "Work closely with production, quality, and equipment engineering teams to resolve incidents with minimal downtime."
          ]}
        />
        <ExperienceItem
          role="Backend Developer"
          company="General Era Digital Solution JSC"
          period="Apr 2025 – Sep 2025"
          location="Ho Chi Minh City, Vietnam"
          highlights={[
            "Built ASP.NET Core Web APIs for an aviation training management system with a focus on compliance and certification workflows.",
            "Implemented secure digital certificate signing with a Hardware Security Module (HSM).",
            "Optimised database queries and backend logic to improve performance and reliability under production workloads.",
            "Implemented Hangfire-based background jobs for long-running and scheduled processing tasks."
          ]}
        />
        <ExperienceItem
          role="Fullstack Developer"
          company="General Era Digital Solution JSC"
          period="Apr 2025 – Sep 2025"
          location="Ho Chi Minh City, Vietnam"
          highlights={[
            "Maintained and improved core backend features in ASP.NET MVC for Training and Learning Management Systems.",
            "Exposed new capabilities via ASP.NET Core APIs to support modern frontend clients.",
            "Collaborated with frontend teams using React, jQuery, and Razor Pages to refine flows and usability."
          ]}
        />
        <ExperienceItem
          role="Intern Tester / Backend Developer"
          company="HPT Vietnam Corporation"
          period="May 2023 – Aug 2023"
          location="Ho Chi Minh City, Vietnam"
          highlights={[
            "Contributed backend APIs in .NET 6 for a flight ticket comparison platform.",
            "Designed SQL Server schemas to handle dynamic pricing and availability data.",
            "Integrated Selenium-based crawlers to keep datasets up to date.",
            "Applied Entity Framework Core and dependency injection to keep components modular and testable."
          ]}
        />
      </div>
    </Section>
  );
}

