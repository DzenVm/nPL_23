import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink-900/15 bg-ink-900 text-parchment-200">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-md">
            <p className="font-display text-xl text-parchment-50">
              Warsztat czeka na kolejne zlecenie, niezależnie od pory dnia.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-parchment-300/90">
              Strona informacyjna gry przeglądarkowej. Docelowa domena zostanie
              podpięta po zakończeniu konfiguracji — do tego czasu adres jest
              zastępczy.
            </p>
          </div>
          <nav className="flex flex-col gap-2 font-label text-[11px] uppercase tracking-[0.1em] text-parchment-300">
            <Link href="/polityka-prywatnosci" className="transition hover:text-parchment-50">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="transition hover:text-parchment-50">
              Regulamin
            </Link>
            <Link href="/kontakt" className="transition hover:text-parchment-50">
              Kontakt
            </Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-parchment-50/10 pt-6 font-label text-[10px] uppercase tracking-[0.08em] text-parchment-300/70 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} — wszystkie prawa zastrzeżone.</span>
          <span>Domena docelowa: do ustalenia.</span>
        </div>
      </div>
    </footer>
  );
}
