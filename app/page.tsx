import { Biography } from "../components/Biography";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { LoadingScreen } from "../components/LoadingScreen";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800/60 bg-[#0f0f0f]/80 backdrop-blur-md">
      <div className="section-padding">
        <div className="section-max-width flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-northwell text-5xl leading-none text-zinc-100">
              Tuan Nguyen
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-medium text-base text-zinc-500">
            <a href="#biography" className="hover:text-zinc-100 transition">
              Biography
            </a>
            <a href="#skills" className="hover:text-zinc-100 transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-zinc-100 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-zinc-100 transition">
              Projects
            </a>
            <a href="#education" className="hover:text-zinc-100 transition">
              Education
            </a>
            <a href="#contact" className="hover:text-zinc-100 transition">
              Contact
            </a>
          </nav>
          <a
            href="mailto:tuan.na.02x2@gmail.com"
            className="hidden sm:inline-flex items-center rounded-full border border-accent/60 px-5 py-2 font-medium text-sm text-accent transition hover:bg-accent hover:text-black"
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
    <>
      <LoadingScreen />
      <main className="relative">
        <Nav />
        <div className="pt-16 md:pt-20">
          <Hero />
          <Biography />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <footer className="section-padding py-10 border-t border-zinc-800/60 text-sm text-zinc-500">
            <div className="section-max-width flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p>© 2026 Tuan Nguyen.</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
