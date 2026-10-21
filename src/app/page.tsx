import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Packages } from "@/components/sections/Packages";
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
      <Projects />
      <Packages />
      <Contact />
      <Footer />
    </main>
  );
}