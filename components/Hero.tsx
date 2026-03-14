export function Hero() {
  return (
    <section
      id="top"
      className="section-padding relative min-h-screen flex items-center"
      aria-labelledby="hero-title"
    >
      {/* Subtle radial accent glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(255,77,77,0.12),_transparent_70%)]" />

      <div className="section-max-width grid gap-12 lg:gap-16 lg:grid-cols-[1fr_380px] items-center w-full">
        {/* Left — headline, intro, CTAs */}
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-accent/80 mb-5 font-medium">
            Backend / .NET Developer
          </p>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-zinc-100"
          >
            Building{" "}
            <span className="text-accent">scalable backend systems</span>{" "}
            for teams that can&apos;t afford downtime.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed font-medium">
            I&apos;m Tuan Nguyen — a backend engineer based in Ho Chi Minh
            City, Vietnam. I design reliable RESTful APIs, enterprise data
            models, and production-grade services with .NET and SQL Server.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-black transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              Get in touch
              <span className="ml-2 text-accent">→</span>
            </a>
          </div>
        </div>

        {/* Right — Profile Card (glassmorphism) */}
        <aside className="hidden lg:block">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 backdrop-blur-md shadow-card">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-4xl font-northwell text-zinc-100">
                  Tuan Nguyen
                </h2>
                <p className="text-sm text-zinc-400 mt-0.5 font-medium">
                  Backend / .NET Developer
                </p>
              </div>
              <span className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-800 mb-6" />

            {/* Info rows */}
            <dl className="space-y-4 text-[0.9rem]">
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Location</dt>
                <dd className="text-zinc-100 font-medium text-right">
                  Ho Chi Minh City, Vietnam
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Focus</dt>
                <dd className="text-zinc-100 font-medium text-right">
                  Enterprise APIs, backend architecture, database design
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Stack</dt>
                <dd className="text-zinc-100 font-medium text-right">
                  ASP.NET Core, SQL Server, Docker, Clean Architecture
                </dd>
              </div>
            </dl>

            {/* Footer accent */}
            <div className="mt-6 h-px bg-gradient-to-r from-accent/40 via-zinc-800 to-transparent" />
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              Focused on reliability, maintainability, and clean code.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
