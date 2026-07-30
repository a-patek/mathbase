"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primary = [
  { href: "/", label: "Home", icon: "⌂" },
  { href: "/learn", label: "Learn", icon: "▤" },
  { href: "/practice", label: "Practice", icon: "✎" },
];

const community = [
  { href: "/competition", label: "Competition", icon: "♜" },
  { href: "/competition-team", label: "Competition team", icon: "☆" },
  { href: "/collaborations-sponsors", label: "Sponsors", icon: "◫" },
  { href: "/team", label: "Team", icon: "◉" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const links = (items: typeof primary) => items.map((item) => (
    <Link key={item.href} href={item.href} className={`mb-nav-link ${active(item.href) ? "is-active" : ""}`}>
      <span aria-hidden="true">{item.icon}</span><span>{item.label}</span>
    </Link>
  ));

  return <>
    <header className="mb-mobile-bar">
      <Link href="/" className="mb-logo"><i>∑</i><strong>Math Base</strong></Link>
      <button type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}><span/><span/><span/></button>
    </header>
    <button className={`mb-nav-backdrop ${isOpen ? "is-open" : ""}`} aria-label="Close navigation" onClick={() => setIsOpen(false)} />
    <aside className={`mb-sidebar ${isOpen ? "is-open" : ""}`}>
      <div>
        <Link href="/" className="mb-logo"><i>∑</i><strong>Math Base</strong></Link>
        <div className="mb-beta"><span/> Proof-first learning</div>
        <nav aria-label="Main navigation">
          <p>STUDY</p>{links(primary)}
          <p>COMMUNITY</p>{links(community)}
        </nav>
      </div>
      <div className="mb-sidebar-footer">
        <Link href="/profile" className={`mb-profile ${active("/profile") ? "is-active" : ""}`}><span>AP</span><p><strong>My profile</strong><small>Progress & settings</small></p><b>→</b></Link>
        <Link href="/auth" className="mb-sign-in">Sign in or create account <span>→</span></Link>
      </div>
    </aside>
  </>;
}
