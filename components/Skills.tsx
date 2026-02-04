import { Section } from "./Section";

type SkillGroupProps = {
  label: string;
  items: string[];
};

function SkillGroup({ label, items }: SkillGroupProps) {
  return (
    <div className="border-t border-white/5 pt-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        {label}
      </h3>
      <p className="mt-3 text-sm text-zinc-200">
        {items.join(" · ")}
      </p>
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="A backend-first toolkit for enterprise systems."
      subtitle="Focused on .NET, SQL, and the surrounding tools required to ship and maintain production services."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <div>
          <p className="text-zinc-200">
            I specialise in designing RESTful APIs, relational data models, and
            backend workflows that can scale with demanding environments—from
            manufacturing floors to aviation training platforms. Clean
            architecture, clear boundaries, and defensive coding are non‑negotiable
            parts of my process.
          </p>
          <p className="mt-4 text-sm text-zinc-300">
            I&apos;m comfortable working in existing monoliths, gradually
            refactoring towards better structure, as well as building new
            services from scratch with modern .NET and SQL Server.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-surface/70 p-6 backdrop-blur">
          <SkillGroup
            label="Backend & Languages"
            items={[
              "C#",
              "ASP.NET Core Web API",
              ".NET Framework",
              "RESTful API design",
              "Java"
            ]}
          />
          <SkillGroup
            label="Frontend"
            items={["HTML5", "CSS3", "JavaScript", "jQuery", "React"]}
          />
          <SkillGroup
            label="Databases"
            items={[
              "SQL Server",
              "PostgreSQL",
              "MySQL",
              "MariaDB",
              "Data modelling",
              "Query optimisation"
            ]}
          />
          <SkillGroup
            label="DevOps & Tools"
            items={[
              "Git (GitFlow)",
              "Docker",
              "SonarQube",
              "Postman",
              "Apache Tomcat",
              "FTP integrations"
            ]}
          />
          <SkillGroup
            label="Testing & Methodologies"
            items={[
              "xUnit",
              "Selenium",
              "Playwright",
              "Agile / Scrum",
              "Code review",
              "CI-ready workflows"
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

