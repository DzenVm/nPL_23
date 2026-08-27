import { QuillDivider } from "./art/QuillDivider";

const entries = [
  {
    date: "12 sierpnia",
    title: "Dlaczego zrezygnowałem z paska energii",
    body: "Przez dwa tygodnie testowałem wersję z limitem akcji dziennie — coś w stylu punktów wytrzymałości. Okazało się, że to psuje cały nastrój: zamiast błąkać się po ścieżkach dla przyjemności, ludzie liczyli, ile im zostało. Usunąłem to całkowicie. Trasa kosztuje jedną turę, koniec historii.",
  },
  {
    date: "3 lipca",
    title: "Notatnik dostał historię prób",
    body: "Wcześniej nieudana receptura po prostu znikała. Teraz zostaje jako przekreślona linijka, którą można kliknąć i zobaczyć, co dokładnie się nie zgadzało. To była najmniejsza zmiana z dużym efektem — nagle notatnik zaczął wyglądać jak coś, co się prowadzi, a nie jak lista wyników.",
  },
  {
    date: "19 maja",
    title: "Tablica zleceń bez terminów",
    body: "Miałem wersję roboczą z zleceniami wygasającymi po kilku dniach. Po testach z kilkoma znajomymi wywaliłem to — presja czasu kompletnie nie pasowała do reszty gry. Zlecenie od Bartka może czekać na Ciebie miesiąc, jeśli akurat nie masz odpowiedniego składnika.",
  },
  {
    date: "2 kwietnia",
    title: "Koło pór roku podpięte pod prawdziwy kalendarz",
    body: "To był eksperyment, który mógł się nie udać — powiązanie pór roku w grze z rzeczywistą datą. Obawiałem się, że gracze, którzy zajrzą raz na miesiąc, poczują się ukarani. Rozwiązanie: składniki nie psują się, jeśli nie zbierzesz ich na czas. Sezon po prostu zmienia to, co jest dostępne, nic więcej.",
  },
  {
    date: "14 lutego",
    title: "Pierwsza wersja mapy ścieżek",
    body: "Pierwotnie chciałem zrobić otwartą mapę 2D z chodzeniem postacią. Po miesiącu prototypowania uznałem, że to niepotrzebnie komplikuje coś, co ma być spokojne. Węzły połączone ścieżkami załatwiają sprawę lepiej i dużo szybciej się w nich orientujesz.",
  },
];

export function Devlog() {
  return (
    <section id="dziennik" className="border-t border-ink-900/15 bg-parchment-50/60">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="font-display text-3xl text-ink-900 md:text-4xl">Dziennik prac</h2>
        <p className="mt-3 text-ink-700">
          Notatki pisane w trakcie budowania gry — także te decyzje, które
          później wycofałem. Zostawiam je, bo pokazują, dlaczego gra wygląda
          tak, a nie inaczej.
        </p>
        <QuillDivider className="mt-8 h-10 w-40" />
        <ol className="mt-4 space-y-9">
          {entries.map((e) => (
            <li key={e.title} className="border-l-2 border-ink-900/15 pl-5">
              <p className="font-label text-[11px] uppercase tracking-[0.1em] text-rust-600">{e.date}</p>
              <p className="mt-1 font-display text-xl text-ink-900">{e.title}</p>
              <p className="mt-2 leading-[1.75] text-ink-700">{e.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
