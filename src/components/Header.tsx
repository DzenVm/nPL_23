import Link from "next/link";

const links = [
  { href: "#mechanika", label: "Jak to działa" },
  { href: "#swiat", label: "Miasteczko" },
  { href: "#dziennik", label: "Dziennik prac" },
  { href: "#faq", label: "Pytania" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-900/15 bg-parchment-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        {/* Miejsce na markę zostaje puste do czasu podpięcia domeny docelowej. */}
        <div className="h-8 w-8 shrink-0" aria-hidden />
        <nav className="hidden gap-6 font-label text-[11px] uppercase tracking-[0.14em] text-ink-700 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink-900">
              {l.label}
            </a>
          ))}
        </nav>
        <Link
          href="#start"
          className="border-etched bg-moss-500 px-4 py-2 font-label text-[11px] uppercase tracking-[0.12em] text-parchment-50 transition hover:bg-moss-600"
        >
          Zajrzyj do warsztatu
        </Link>
      </div>
    </header>
  );
}
