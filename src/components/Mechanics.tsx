import { GatheringMap } from "./art/GatheringMap";
import { RecipeBook } from "./art/RecipeBook";
import { OrdersBoard } from "./art/OrdersBoard";
import { SeasonWheel } from "./art/SeasonWheel";

const blocks = [
  {
    id: "zbieranie",
    title: "Ścieżki po składniki",
    art: GatheringMap,
    body: [
      "Okolica jest podzielona na węzły połączone ścieżkami – trochę jak stary szlak turystyczny narysowany odręcznie na marginesie mapy. Każdy węzeł to miejsce, gdzie coś rośnie albo leży: kora na powalonym pniu, grzyby przy wilgotnym rowie, korzenie tam, gdzie ziemia jest bardziej gliniasta.",
      "Wybierasz trasę na dany wieczór – dłuższa daje więcej składników, ale zajmuje całą turę i możesz nie zdążyć na tablicę zleceń. To pierwsza decyzja, którą podejmujesz każdego dnia, i ona naprawdę ma znaczenie dla tego, co ugotujesz wieczorem.",
    ],
  },
  {
    id: "receptury",
    title: "Notatnik receptur",
    art: RecipeBook,
    body: [
      "Każdy składnik ma trzy–cztery cechy zapisane w formie prostego wykresu – nie liczb do przeliczania w głowie, tylko kształtu, który da się porównać na oko. Łączysz dwa lub trzy składniki tak, żeby ich cechy się uzupełniały, a nie gasiły nawzajem.",
      "Nieudana próba nie znika – trafia do notatnika jako przekreślona linia z Twoim komentarzem. Po kilku tygodniach ten notatnik staje się bardziej osobisty niż jakikolwiek ranking, bo to zapis Twojego rozumowania, nie wyniku.",
    ],
  },
  {
    id: "zlecenia",
    title: "Tablica zleceń",
    art: OrdersBoard,
    body: [
      "Mieszkańcy zostawiają karteczki: komuś doskwiera bezsenność, komuś inny zsiadło mleko na targu, ktoś chce coś na ukojenie spuchniętej kostki po drodze z pola. Zlecenia nie mają limitu czasu liczonego w minutach – masz na nie tyle sezonów, ile potrzebujesz.",
      "W zamian nie dostajesz punktów, tylko coś bardziej namacalnego: dostęp do nowego narzędzia na stole, polecenie do kolejnej osoby w miasteczku albo po prostu rzadki składnik, którego nie znajdziesz na żadnej ścieżce.",
    ],
  },
  {
    id: "pory-roku",
    title: "Pory roku, które naprawdę mijają",
    art: SeasonWheel,
    body: [
      "Kalendarz w grze jest powiązany z realnym tygodniem – to, co rośnie w Twoim warsztacie teraz, zależy od tego, jaki mamy miesiąc naprawdę. Zimą część ścieżek jest trudniej dostępna, za to piec działa wydajniej i można dłużej suszyć zioła.",
      "Nie chodzi o to, żeby zmuszać Cię do logowania się codziennie – składniki nie psują się, jeśli akurat nie zajrzysz przez dwa tygodnie. To po prostu tło, które sprawia, że warsztat czuje się jak miejsce, a nie plansza.",
    ],
  },
];

export function Mechanics() {
  return (
    <section id="mechanika" className="border-t border-ink-900/15 bg-parchment-50/60">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl text-ink-900 md:text-4xl">Z czego składa się dzień pracy</h2>
        <p className="mt-3 max-w-2xl text-ink-700">
          Cztery elementy, które się ze sobą zazębiają. Żaden z nich osobno nie
          jest specjalnie efektowny – dopiero razem dają ten rytm, o który chodzi.
        </p>
        <div className="mt-12 flex flex-col gap-20">
          {blocks.map((b, i) => {
            const Art = b.art;
            const reverse = i % 2 === 1;
            return (
              <div
                key={b.id}
                id={b.id}
                className={`grid items-center gap-8 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <Art className="w-full border-etched bg-parchment-50" />
                <div>
                  <span className="font-label text-[11px] uppercase tracking-[0.14em] text-rust-600">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-ink-900">{b.title}</h3>
                  <div className="mt-3 space-y-3 leading-[1.75] text-ink-700">
                    {b.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
