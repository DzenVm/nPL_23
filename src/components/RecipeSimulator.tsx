"use client";

import { useMemo, useState } from "react";

type Trait = "gorzkość" | "lotność" | "wilgotność";

const ingredients: Record<string, Record<Trait, number>> = {
  "korzeń dębowca": { gorzkość: 3, lotność: 1, wilgotność: 1 },
  "kwiat bzowy": { gorzkość: 1, lotność: 2, wilgotność: 2 },
  "żywica sosnowa": { gorzkość: 2, lotność: 3, wilgotność: 0 },
  "mech torfowy": { gorzkość: 0, lotność: 0, wilgotność: 3 },
  "jeżyna leśna": { gorzkość: 1, lotność: 1, wilgotność: 2 },
  "kora wierzbowa": { gorzkość: 3, lotność: 0, wilgotność: 1 },
};

const names = Object.keys(ingredients);

function evaluate(a: string, b: string) {
  const ta = ingredients[a];
  const tb = ingredients[b];
  const traits: Trait[] = ["gorzkość", "lotność", "wilgotność"];
  const diffs = traits.map((t) => Math.abs(ta[t] - tb[t]));
  const spread = diffs.reduce((s, d) => s + d, 0);
  const balanced = diffs.every((d) => d <= 2) && spread >= 2 && spread <= 5;

  if (a === b) {
    return { verdict: "za mało zróżnicowania", note: "Dwa takie same składniki nie dają receptury — potrzebujesz kontrastu cech, nie powtórzenia." };
  }
  if (balanced) {
    return { verdict: "warto spróbować", note: "Cechy się uzupełniają na tyle, że w pełnej wersji ten układ zwykle daje się dopracować do stabilnej mikstury." };
  }
  if (spread < 2) {
    return { verdict: "zbyt podobne", note: "Składniki niemal się dublują — mikstura wyjdzie płaska, bez wyraźnego działania." };
  }
  return { verdict: "zbyt gwałtowne", note: "Różnica jest tak duża, że jeden składnik po prostu zagłuszy drugi. W notatniku zapisałbyś to jako próbę do poprawki." };
}

export function RecipeSimulator() {
  const [a, setA] = useState(names[0]);
  const [b, setB] = useState(names[3]);
  const result = useMemo(() => evaluate(a, b), [a, b]);

  return (
    <div className="border-etched bg-parchment-50 p-6">
      <p className="font-label text-[11px] uppercase tracking-[0.12em] text-rust-600">
        Miniaturka mechaniki — spróbuj sam
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">
        To uproszczony wycinek notatnika receptur z pełnej gry. Wybierz dwa
        składniki i zobacz, czy ich cechy się dopełniają, czy raczej gaszą.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 font-label text-[10px] uppercase tracking-[0.08em] text-ink-600">
          Składnik pierwszy
          <select
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="border border-ink-900/30 bg-parchment-100 px-3 py-2 font-body text-sm normal-case tracking-normal text-ink-900"
          >
            {names.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 font-label text-[10px] uppercase tracking-[0.08em] text-ink-600">
          Składnik drugi
          <select
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="border border-ink-900/30 bg-parchment-100 px-3 py-2 font-body text-sm normal-case tracking-normal text-ink-900"
          >
            {names.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5 border-t border-ink-900/15 pt-4">
        <p className="font-display text-xl text-ink-900">{result.verdict}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-700">{result.note}</p>
      </div>
    </div>
  );
}
