import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-x-clip bg-ink text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-grid mask-fade-b"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[70vh] glow-spot"
      />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Ecosystem />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}