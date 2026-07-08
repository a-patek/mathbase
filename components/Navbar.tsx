// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/competition", label: "Competition" },
  { href: "/competition-team", label: "Comp Team" },
  { href: "/collaborations-sponsors", label: "Sponsors" },
  { href: "/learn", label: "Learn" },
  { href: "/practice", label: "Practice" },
  { href: "/team", label: "Team" },
  
  
];



export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060815]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
                math
              </span>
              <span className="text-xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-teal-200 via-indigo-200 to-amber-200 bg-clip-text text-transparent">
                  base
                </span>
              </span>
            </div>
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="site-sidebar"
            onClick={() => setIsOpen((open) => !open)}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-slate-100 transition hover:border-teal-300/50 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-300/70"
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className="h-0.5 rounded-full bg-current transition group-hover:text-teal-200" />
              <span className="h-0.5 rounded-full bg-current transition group-hover:text-teal-200" />
              <span className="h-0.5 rounded-full bg-current transition group-hover:text-teal-200" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm transition-opacity",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <aside
        id="site-sidebar"
        className={[
          "fixed right-0 top-0 z-50 flex h-dvh w-[min(21rem,calc(100vw-2rem))] flex-col border-l border-white/10 bg-[#060815] shadow-2xl shadow-black/40 transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex flex-col leading-tight"
          >
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
              math
            </span>
            <span className="text-xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-teal-200 via-indigo-200 to-amber-200 bg-clip-text text-transparent">
                base
              </span>
            </span>
          </Link>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-xl leading-none text-slate-300 transition hover:border-teal-300/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300/70"
          >
            x
          </button>
        </div>

        <div className="border-b border-white/10 px-5 py-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Proof-first beta
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-2 px-4 py-5 text-sm">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={[
                  "rounded-lg border px-4 py-3 transition-colors",
                  "text-slate-300 hover:border-white/15 hover:bg-slate-900 hover:text-white",
                  isActive
                    ? "border-teal-300/40 bg-slate-900 text-teal-100"
                    : "border-transparent",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <Link
            href="/auth"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center rounded-lg border border-teal-300/60 bg-teal-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            Sign up
          </Link>
        </div>
      </aside>
    </>
  );
}
