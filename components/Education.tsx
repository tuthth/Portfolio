export function Education() {
  return (
    <section
      id="education"
      className="section-padding py-20 md:py-28 border-t border-zinc-800/60"
      aria-labelledby="education-title"
    >
      <div className="section-max-width">
        <header className="mb-12 md:mb-16 max-w-2xl">
          <h2
            id="education-title"
            className="font-northwell text-5xl md:text-6xl lg:text-7xl text-zinc-100"
          >
            Academic Foundation
          </h2>
        </header>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-7 max-w-lg shadow-card">
          <h3 className="text-lg font-semibold text-zinc-100">
            Bachelor&apos;s Degree in Software Engineering
          </h3>
          <p className="mt-2 text-base text-zinc-400 font-medium">FPT University</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
            2020 – 2024
          </p>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed font-medium">
            Four-year programme with a strong emphasis on software
            development practices, team-based capstone projects, and
            real-world problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}
