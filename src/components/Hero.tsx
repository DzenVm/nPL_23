import { WorkshopScene } from "./art/WorkshopScene";

export function Hero({
  season,
  ingredient,
  weekNumber,
}: {
  season: string;
  ingredient: string;
  weekNumber: number;
}) {
  return (
    <section id="start" className="relative overflow-hidden border-b border-ink-900/15">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="reveal flex flex-col justify-center">
          <span className="font-label text-[11px] uppercase tracking-[0.16em] text-rust-600">
            Gra przeglądarkowa · bez pobierania · po polsku
          </span>
          <h1 className="mt-4 font-display text-[2.6rem] leading-[1.05] text-ink-900 md:text-[3.4rem]">
            Prowadzisz mały warsztat. Ktoś w miasteczku zawsze czegoś potrzebuje.
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-700">
            To nie jest gra o wygrywaniu. Jest o tym, żeby wieczorem otworzyć kartę
            przeglądarki, sprawdzić, co przyniósł dzień, dorzucić drew do pieca i
            wywarzyć coś, na co ktoś czekał. Zbierasz składniki na własnych zasadach,
            zapisujesz odkryte proporcje w notatniku i powoli budujesz miejsce, do
            którego ludzie z okolicy wracają.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#mechanika"
              className="border-etched bg-ink-900 px-5 py-3 font-label text-[12px] uppercase tracking-[0.12em] text-parchment-50 transition hover:bg-ink-800"
            >
              Zobacz, jak wygląda dzień pracy
            </a>
            <span className="font-label text-[11px] uppercase tracking-[0.1em] text-ink-600">
              tydzień gry nr {weekNumber} w kalendarzu realnym
            </span>
          </div>
          <dl className="mt-9 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 border-t border-ink-900/15 pt-5 font-label text-[11px] uppercase tracking-[0.08em] text-ink-600">
            <div>
              <dt className="text-ink-600/70">pora roku w grze</dt>
              <dd className="mt-1 text-sm normal-case tracking-normal text-ink-900">{season}</dd>
            </div>
            <div>
              <dt className="text-ink-600/70">dziś dobrze rośnie</dt>
              <dd className="mt-1 text-sm normal-case tracking-normal text-ink-900">{ingredient}</dd>
            </div>
          </dl>
        </div>
        <div className="reveal flex items-center [animation-delay:120ms]">
          <WorkshopScene className="w-full border-etched bg-parchment-50" />
        </div>
      </div>
    </section>
  );
}
