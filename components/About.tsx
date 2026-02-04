import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Introduction"
      title="Designing stable backends for complex organisations."
      subtitle="From MES lines to aviation training systems, I help teams ship reliable services that stay readable years later."
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <p className="text-zinc-200">
          I&apos;m a .NET backend developer who enjoys turning messy real-world
          requirements into clean API contracts and robust data models. I work
          across legacy systems and modern stacks, with experience refactoring
          VB.NET and PHP codebases while building new ASP.NET Core services in
          parallel.
        </p>
        <div className="space-y-4 text-sm text-zinc-300">
          <p>
            My work spans high-volume Manufacturing Execution Systems (MES),
            training management platforms, and internal tooling. I care deeply
            about traceability, data integrity, and designing systems that are
            easy to debug under pressure.
          </p>
          <p>
            Beyond code, I&apos;m comfortable collaborating with production,
            quality, and operations teams to understand real constraints, then
            translating them into clear technical decisions.
          </p>
        </div>
      </div>
    </Section>
  );
}

