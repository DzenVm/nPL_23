import { RecipeSimulator } from "./RecipeSimulator";

export function SimulatorSection() {
  return (
    <section className="border-t border-ink-900/15">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <h2 className="font-display text-3xl text-ink-900 md:text-4xl">Zanim spróbujesz w pełnej wersji</h2>
          <p className="mt-4 leading-[1.75] text-ink-700">
            Poniżej jest mocno okrojony wycinek notatnika receptur — trzy cechy
            zamiast czterech, sześć składników zamiast kilkudziesięciu. Chodzi
            o to, żebyś zanim usiądziesz do właściwej gry, poczuł, na czym
            polega dobieranie składników do siebie, a nie klikanie na oślep.
          </p>
          <p className="mt-4 leading-[1.75] text-ink-700">
            W pełnej wersji dochodzi jeszcze pora roku, dostępność na danej
            ścieżce i to, czy dany układ ktoś już wcześniej zamówił —
            ale zasada bazowa zostaje dokładnie taka sama.
          </p>
        </div>
        <RecipeSimulator />
      </div>
    </section>
  );
}
