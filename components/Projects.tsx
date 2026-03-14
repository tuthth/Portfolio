type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  ctaHref?: string;
};

function ProjectCard({ name, description, stack, ctaHref }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-7 shadow-card transition hover:border-zinc-700">
      <h3 className="text-xl font-semibold text-zinc-100 tracking-tight">
        {name}
      </h3>

      <p className="mt-3 text-[0.9rem] text-zinc-400 leading-relaxed font-medium">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="inline-block rounded-full border border-zinc-700/60 bg-zinc-800/40 px-3 py-1 text-xs text-zinc-300 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {ctaHref && (
        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium uppercase tracking-[0.15em] text-zinc-200 transition hover:border-accent hover:bg-accent hover:text-black"
          >
            View details
            <span className="ml-2">→</span>
          </a>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding py-20 md:py-28 border-t border-zinc-800/60"
      aria-labelledby="projects-title"
    >
      <div className="section-max-width">
        <header className="mb-12 md:mb-16 max-w-2xl">
          <h2
            id="projects-title"
            className="font-northwell text-5xl md:text-6xl lg:text-7xl text-zinc-100"
          >
            Projects
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            name="PhoneStore.Inventory"
            description="Inventory and order management backend with clean architecture, strict stock validation, and Dockerised deployment."
            stack={[
              "ASP.NET Core",
              "SQL Server",
              "Docker",
              "Clean Architecture",
              "xUnit"
            ]}
            ctaHref="https://github.com/tuthth/PhoneStore.Inventory"
          />
          <ProjectCard
            name="On-Demand Tutor Platform"
            description="Tutoring backend with booking flows, VNPay payments, push notifications, and credential verification using OpenCV."
            stack={[
              "ASP.NET Core",
              "SQL Server",
              "VNPay",
              "Firebase",
              "OpenCV"
            ]}
            ctaHref="https://capstone-snowy-one.vercel.app/"
          />
          <ProjectCard
            name="MES Integrations"
            description="MES enhancements connecting production lines, inspection data, and external systems via SQL Server and FTP-based bridges."
            stack={[
              "VB.NET",
              "SQL Server",
              "PHP",
              "FTP",
              "Stored Procedures"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
