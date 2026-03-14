export function Biography() {
  const details = [
    { label: "Full name", value: "Nguyen Anh Tuan" },
    { label: "Age", value: "24" },
    { label: "Location", value: "Ho Chi Minh City, Vietnam" },
    { label: "Focus", value: "Backend engineering and enterprise APIs" },
    { label: "Stack", value: "ASP.NET Core, SQL Server, Docker, Clean Architecture" },
    {
      label: "Languages",
      value: "Vietnamese (Native), English (Professional working proficiency)"
    }
  ];

  return (
    <section
      id="biography"
      className="section-padding py-20 md:py-28 border-t border-zinc-800/60"
      aria-labelledby="biography-title"
    >
      <div className="section-max-width grid gap-14 lg:grid-cols-[1fr_1fr] items-start">
        {/* Left — title & structured info */}
        <div>
          <h2
            id="biography-title"
            className="font-northwell text-5xl md:text-6xl lg:text-7xl text-zinc-100"
          >
            Biography
          </h2>

          <dl className="mt-10 space-y-5">
            {details.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-medium">
                  {item.label}
                </dt>
                <dd className="text-base text-zinc-200 font-bold">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — professional narrative */}
        <div className="lg:pt-16">
          <div className="space-y-5 text-lg leading-relaxed text-zinc-300 font-medium">
            <p>
              I specialise in backend development with a strong focus on .NET
              technologies and enterprise-grade systems. Over the past years, I
              have gained hands-on experience building RESTful APIs, designing
              relational database schemas, and maintaining large-scale
              production services.
            </p>
            <p>
              My professional background includes working with both legacy
              systems — such as VB.NET and PHP-based platforms — and modern
              stacks built on ASP.NET Core. This dual experience allows me to
              navigate complex codebases confidently and deliver practical
              improvements without disrupting existing workflows.
            </p>
            <p>
              I am particularly interested in building backend services that
              are reliable, well-structured, and straightforward to maintain
              over time. Whether it is refactoring a manufacturing execution
              system or architecting a new API from the ground up, I approach
              each project with a focus on clarity, correctness, and long-term
              sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
