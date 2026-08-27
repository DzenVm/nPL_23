const items = [
  {
    q: "Ile to kosztuje?",
    a: "Sam warsztat, wszystkie ścieżki, receptury i zlecenia są dostępne od razu, bez opłat. W sklepiku wyglądu można kupić elementy dekoracyjne — inny kolor okiennic, wzór na słojach, dodatkową półkę. Każdy z nich ma stałą, widoczną z góry cenę i wpływa wyłącznie na wygląd pomieszczenia, nie na tempo gry ani dostępne receptury.",
  },
  {
    q: "Czy trzeba zakładać konto?",
    a: "Nie. Postęp domyślnie zapisuje się lokalnie, w przeglądarce, na urządzeniu, z którego grasz. Konto jest opcją dla osób, które chcą mieć dostęp do zapisu z kilku urządzeń — zakładane jest tylko wtedy, gdy sam o to poprosisz.",
  },
  {
    q: "Dla kogo jest ta gra?",
    a: "Tempo i tematyka są spokojne — bliżej układanki i notatnika niż czegokolwiek dynamicznego. Nie ma tu przemocy ani treści, które wymagałyby ograniczenia wiekowego powyżej podstawowego progu sklepów z grami. Dobrze sprawdza się jako coś do grania wieczorem, na spokojnie.",
  },
  {
    q: "Jakie dane są zbierane?",
    a: "Do działania samej rozgrywki nie jest potrzebne żadne konto ani dane osobowe — zapis trzyma przeglądarka. Strona korzysta z podstawowej, zanonimizowanej analityki odwiedzin (informacje o tym, ile osób odwiedza stronę i z jakich stron trafiają), opisanej dokładnie w polityce prywatności.",
  },
  {
    q: "Czy trzeba grać codziennie?",
    a: "Nie. Składniki nie znikają, zlecenia nie mają terminu ważności, a przerwa w graniu nie cofa postępu. Gra jest pomyślana tak, żeby dało się do niej wracać nieregularnie, bez poczucia, że coś się przegapiło.",
  },
  {
    q: "Na jakich urządzeniach to działa?",
    a: "W przeglądarce, na komputerze i na telefonie — układ dopasowuje się do szerokości ekranu. Nie ma osobnej aplikacji do instalowania.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16">
      <h2 className="font-display text-3xl text-ink-900 md:text-4xl">Pytania, które zwykle padają</h2>
      <div className="mt-8 divide-y divide-ink-900/15 border-y border-ink-900/15">
        {items.map((it) => (
          <details key={it.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink-900">
              {it.q}
              <span className="shrink-0 font-label text-sm text-rust-600 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-[1.75] text-ink-700">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
