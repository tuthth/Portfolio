type SkillCategoryProps = {
  title: string;
  description: string;
  skills: string[];
};

function SkillCategory({ title, description, skills }: SkillCategoryProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-6">
      <h3 className="text-base font-semibold uppercase tracking-[0.15em] text-zinc-100">
        {title}
      </h3>
      <p className="mt-3 text-[0.9rem] text-zinc-400 leading-relaxed font-medium">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-full border border-zinc-700/60 bg-zinc-800/40 px-3 py-1 text-xs text-zinc-300 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding py-20 md:py-28 border-t border-zinc-800/60"
      aria-labelledby="skills-title"
    >
      <div className="section-max-width">
        <header className="mb-12 md:mb-16 max-w-2xl">
          <h2
            id="skills-title"
            className="font-northwell text-5xl md:text-6xl lg:text-7xl text-zinc-100"
          >
            Skills &amp; Tools
          </h2>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCategory
            title="Backend & Languages"
            description="Experienced in designing RESTful APIs using ASP.NET Core with a focus on reliability, maintainability, and clean architecture."
            skills={[
              "C#",
              "ASP.NET Core Web API",
              ".NET Framework",
              "RESTful API Design",
              "Java"
            ]}
          />
          <SkillCategory
            title="Frontend"
            description="Capable of building and maintaining frontend interfaces when working across the full stack."
            skills={["HTML5", "CSS3", "JavaScript", "jQuery", "React"]}
          />
          <SkillCategory
            title="Databases"
            description="Skilled in relational database design, query optimisation, and managing large-volume production data."
            skills={[
              "SQL Server",
              "PostgreSQL",
              "MySQL",
              "MariaDB",
              "Data Modelling",
              "Query Optimisation"
            ]}
          />
          <SkillCategory
            title="DevOps & Tools"
            description="Familiar with containerisation, version control workflows, and tools for code quality and deployment."
            skills={[
              "Git (GitFlow)",
              "Docker",
              "SonarQube",
              "Postman",
              "Apache Tomcat",
              "FTP Integrations"
            ]}
          />
          <SkillCategory
            title="Testing & Methodologies"
            description="Practised in writing automated tests and working within Agile environments to deliver iterative improvements."
            skills={[
              "xUnit",
              "Selenium",
              "Playwright",
              "Agile / Scrum",
              "Code Review",
              "CI-ready Workflows"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
