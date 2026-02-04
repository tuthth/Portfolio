export function Hero() {
  return (
    <section
      id="top"
      className="section-padding min-h-screen flex items-center"
      aria-labelledby="hero-title"
    >
      <div className="section-max-width grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-accentSoft mb-6">
            Backend / .NET Developer
          </p>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight"
          >
            Building{" "}
            <span className="text-accent">scalable backend systems</span> for
            teams that can&apos;t afford downtime.
          </h1>
          <p className="mt-6 max-w-xl text-sm md:text-base text-zinc-300 leading-relaxed">
            I&apos;m Nguyen Anh Tuan, a backend engineer from Ho Chi Minh City,
            Vietnam. I design and build RESTful APIs, enterprise-grade data
            models, and reliable services with .NET and SQL Server.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium tracking-wide text-black shadow-soft transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View featured projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-medium text-zinc-300 hover:text-white transition"
            >
              Let&apos;s discuss your backend
              <span className="ml-1 text-accent">↗</span>
            </a>
          </div>
        </div>

        <div className="relative hidden sm:block">
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,75,75,0.35),_transparent_60%)] opacity-60" />
          <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-xs text-muted mb-6">
              <span>Currently</span>
              <span className="inline-flex items-center gap-2">
                MES Developer
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </div>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Location</dt>
                <dd className="font-medium text-zinc-100">
                  Ho Chi Minh City, Vietnam
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Focus</dt>
                <dd className="font-medium text-zinc-100 text-right">
                  RESTful APIs, enterprise systems, clean architecture.
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Stack</dt>
                <dd className="font-medium text-zinc-100 text-right">
                  ASP.NET Core, SQL Server, Entity Framework, Docker.
                </dd>
              </div>
            </dl>
            <div className="mt-6 h-px bg-gradient-to-r from-accent/40 via-white/5 to-transparent" />
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              Always refactoring for clarity, performance, and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

