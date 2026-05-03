import { useEffect, useState } from "react";

const links = [
  { href: "#details", label: "Details" },
  { href: "#dancer", label: "Dancer" },
  { href: "#gurus", label: "Gurus" },
  { href: "#repertoire", label: "Repertoire" },
  { href: "#orchestra", label: "Orchestra" },
  { href: "#gallery", label: "Gallery" },
  { href: "#rsvp", label: "RSVP" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl md:text-2xl text-primary tracking-widest">
          Veda Chekuri
        </a>
        <ul className="hidden md:flex items-center gap-8 font-display text-[0.78rem] tracking-[0.22em] uppercase text-primary">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-[var(--gold)] transition-colors">{l.label}</a></li>
          ))}
        </ul>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col p-4 gap-3 font-display tracking-widest uppercase text-sm text-primary">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
