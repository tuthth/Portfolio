type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

function ExperienceItem({
  role,
  company,
  period,
  highlights
}: ExperienceItemProps) {
  return (
    <article className="grid gap-6 md:grid-cols-[220px_1fr] py-8 border-t border-zinc-800/60">
      {/* Left — metadata */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2 font-medium">
          {period}
        </p>
        <h3 className="text-lg font-semibold text-zinc-100">{role}</h3>
        <p className="text-[0.9rem] text-zinc-400 mt-1 font-medium">{company}</p>
      </div>

      {/* Right — highlights */}
      <ul className="space-y-3 text-base text-zinc-300 leading-relaxed font-medium">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding py-20 md:py-28 border-t border-zinc-800/60"
      aria-labelledby="experience-title"
    >
      <div className="section-max-width">
        <header className="mb-12 md:mb-16 max-w-2xl">
          <h2
            id="experience-title"
            className="font-northwell text-5xl md:text-6xl lg:text-7xl text-zinc-100"
          >
            Career Journey
          </h2>
          <p className="mt-5 text-lg text-zinc-400 leading-relaxed font-medium">
            Hands-on experience maintaining legacy systems while shipping
            new services in production environments.
          </p>
        </header>

        <div>
          <ExperienceItem
            role="MES Developer"
            company="SAIGON STEC CO., LTD."
            period="Oct 2025 – Present"
            highlights={[
              "Maintained and improved enterprise MES systems supporting high-volume production environments.",
              "Refactored legacy VB.NET modules to improve maintainability and performance.",
              "Designed SQL Server schemas handling large volumes of production and inspection data."
            ]}
          />
          <ExperienceItem
            role="Backend Developer"
            company="General Era Digital Solution JSC"
            period="Apr 2025 – Sep 2025"
            highlights={[
              "Built ASP.NET Core Web APIs for an aviation training management system with compliance-focused workflows.",
              "Implemented secure digital certificate signing with a Hardware Security Module (HSM).",
              "Optimised database queries and backend logic to improve reliability under production workloads."
            ]}
          />
          <ExperienceItem
            role="Fullstack Developer"
            company="General Era Digital Solution JSC"
            period="Apr 2025 – Sep 2025"
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
            highlights={[
              "Contributed backend APIs in .NET 6 for a flight ticket comparison platform.",
              "Designed SQL Server schemas to handle dynamic pricing and availability data.",
              "Applied Entity Framework Core and dependency injection to keep components modular and testable."
            ]}
          />
        </div>
      </div>
    </section>
  );
}
