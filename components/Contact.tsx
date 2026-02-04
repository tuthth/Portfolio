import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about your next backend."
      subtitle="Open to backend and platform roles where reliability, clean architecture, and long-term maintainability matter."
      align="center"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="max-w-xl text-sm text-zinc-200">
          Whether you&apos;re scaling an existing system, modernising a legacy
          stack, or planning a new platform, I&apos;m interested in problems
          where backend quality directly impacts people on the ground.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href="mailto:tuan.na.02x2@gmail.com"
            className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 font-medium tracking-wide text-black shadow-soft transition hover:bg-accentSoft"
          >
            Email me
          </a>
          <a
            href="https://github.com/tuthth"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-zinc-200 hover:border-accent hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anh-tuan-22863a2b5"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-zinc-200 hover:border-accent hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/1nhtu1n"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-zinc-200 hover:border-accent hover:text-white transition"
          >
            Facebook
          </a>
        </div>
        <p className="text-[0.7rem] uppercase tracking-[0.25em] text-muted">
          Available for remote and Ho Chi Minh City – based roles.
        </p>
      </div>
    </Section>
  );
}

