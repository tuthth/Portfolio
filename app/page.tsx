import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur">
      <div className="section-padding">
        <div className="section-max-width flex items-center justify-between py-4 text-xs">
          <a
            href="#top"
            className="font-semibold tracking-[0.2em] uppercase text-zinc-200"
          >
            Nguyen Anh Tuan
          </a>
          <nav className="hidden md:flex gap-6 text-[0.7rem] uppercase tracking-[0.25em] text-muted">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#education" className="hover:text-white transition">
              Education
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
          <a
            href="mailto:tuan.na.02x2@gmail.com"
            className="hidden sm:inline-flex items-center rounded-full border border-accent px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-accent hover:bg-accent hover:text-black transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <div className="pt-20 md:pt-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <footer className="section-padding py-10 border-t border-white/5 text-[0.7rem] text-muted">
          <div className="section-max-width flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Nguyen Anh Tuan.</p>
            <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

