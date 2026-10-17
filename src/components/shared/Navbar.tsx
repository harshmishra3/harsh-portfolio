"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Work", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "For Businesses", href: "/for-businesses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-3"
        >
          <span className="text-[17px] font-semibold tracking-tight">
            harsh mishra
          </span>
          <span className="mono-label hidden sm:inline">product engineer</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  active ? "text-paper" : "text-fog hover:text-paper"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden rounded-full bg-paper px-4 py-1.5 text-sm font-medium text-ink transition-opacity hover:opacity-80 md:inline-block"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-full border border-line p-2 text-fog transition-colors hover:border-mist hover:text-paper md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-fog transition-colors hover:bg-surface hover:text-paper"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-paper px-4 py-2.5 text-center text-sm font-medium text-ink"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}