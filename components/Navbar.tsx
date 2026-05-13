// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tutoring", label: "Tutoring" },
  { href: "/competition", label: "Competition" },
  { href: "/learn", label: "Learn" },
  { href: "/practice", label: "Practice" },
  { href: "/team", label: "Team" },
  
  
];



export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060815]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo / wordmark */}
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

        {/* Right side: minimal nav */}
        <nav className="flex items-center gap-4 text-xs md:text-sm">
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-950 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400 md:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Proof-first beta
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-full px-3 py-1 transition-colors",
                    "text-slate-400 hover:text-slate-100 hover:bg-slate-900",
                    isActive
                      ? "bg-slate-900 text-slate-50 border border-white/15"
                      : "border border-transparent",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/auth"
              className="rounded-full border border-teal-300/60 bg-teal-300 px-3 py-1 text-slate-950 transition hover:bg-teal-200"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
