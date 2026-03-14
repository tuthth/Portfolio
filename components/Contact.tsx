export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding py-20 md:py-28 border-t border-zinc-800/60"
      aria-labelledby="contact-title"
    >
      <div className="section-max-width max-w-2xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-accent/80 mb-4 font-medium">
          Contact
        </p>
        <h2
          id="contact-title"
          className="font-northwell text-5xl md:text-6xl lg:text-7xl text-zinc-100"
        >
          Let&apos;s Connect
        </h2>
        <p className="mt-5 text-lg text-zinc-400 leading-relaxed font-medium">
          Whether you&apos;re scaling an existing platform, modernising a
          legacy stack, or starting fresh — I&apos;m interested in problems
          where backend quality has a real impact.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:tuan.na.02x2@gmail.com"
            className="inline-flex items-center rounded-full bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-black transition hover:bg-accentSoft"
          >
            Email me
          </a>
          <a
            href="https://github.com/tuthth"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anh-tuan-22863a2b5"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium">
          Available for remote and Ho Chi Minh City – based roles.
        </p>
      </div>
    </section>
  );
}
