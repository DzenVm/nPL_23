const people = [
  {
    name: "Stara Wichrowa",
    role: "prowadzi targ warzywny",
    note: "Zawsze wie, kto czego potrzebuje, zanim ten ktoś sam się zorientuje. Płaci mało, ale poleca dużo.",
  },
  {
    name: "Bartek od kowala",
    role: "uczeń kowalski",
    note: "Ciągle coś sobie parzy albo tłucze młotkiem po palcach. Twój najczęstszy klient przez pierwsze tygodnie.",
  },
  {
    name: "Felicja spod młyna",
    role: "prowadzi młyn wodny",
    note: "Handluje uczciwie, ale prosi o rzeczy trudne do zdobycia – zna się na jakości lepiej niż większość.",
  },
  {
    name: "Leśniczy Osiek",
    role: "pilnuje granicy lasu",
    note: "To on odblokowuje dalsze, rzadziej odwiedzane ścieżki, kiedy uzna, że jesteś gotowy.",
  },
];

export function WorldLore() {
  return (
    <section id="swiat" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl text-ink-900 md:text-4xl">Miasteczko, które nie czeka na Ciebie</h2>
          <div className="mt-5 space-y-4 leading-[1.75] text-ink-700">
            <p>
              Osada leży na styku pól i starego lasu – wystarczająco daleko od
              większych dróg, żeby nikt się tu nie spieszył, i wystarczająco
              blisko rzeki, żeby zawsze było o czym plotkować przy studni.
              Mieszkańcy żyją swoim życiem niezależnie od tego, czy akurat
              grasz: targ działa w swoje dni, młyn miele zboże, a leśniczy
              chodzi swoimi trasami.
            </p>
            <p>
              Nie ma tu głównego wątku do „przejścia” – jest kilkanaście osób
              z własnymi drobnymi sprawami, do których czasem wracasz po
              miesiącach gry, bo dopiero teraz masz składnik, którego wtedy
              brakowało.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {people.map((p) => (
            <div key={p.name} className="border-etched bg-parchment-50 p-4">
              <p className="font-display text-lg text-ink-900">{p.name}</p>
              <p className="font-label text-[10px] uppercase tracking-[0.1em] text-rust-600">{p.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
