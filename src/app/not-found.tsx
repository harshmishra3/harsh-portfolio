import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <Navbar />
      <section className="mx-auto flex min-h-[70vh] w-full max-w-[1400px] flex-col items-start justify-center px-6 pb-24 pt-36 lg:px-10">
        <span className="mono-label">error 404</span>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          This page took a <span className="serif-italic">wrong turn</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-fog">
          The link may be old or moved. Head back home or browse the selected
          work.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-80"
          >
            Back home
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-mist hover:bg-surface"
          >
            View work
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}