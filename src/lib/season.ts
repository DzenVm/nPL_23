const seasonNames = [
  "zimowy przestój", "zimowy przestój",
  "przebudzenie wiosenne", "przebudzenie wiosenne", "przebudzenie wiosenne",
  "pełnia lata", "pełnia lata", "pełnia lata",
  "zbiory jesienne", "zbiory jesienne", "zbiory jesienne",
  "zimowy przestój",
];

const monthIngredient = [
  "korzeń dębowca", "kora wierzbowa", "pierwiosnek błotny", "pąk jaśminowca",
  "kwiat bzowy", "żywica sosnowa", "dzika mięta", "jeżyna leśna",
  "grzyb purchawka", "jarzębina", "mech torfowy", "szyszka jodłowa",
];

/**
 * Real-calendar-driven values computed on the server at request time —
 * this is genuine SSR, not a client-side fetch mimicking one.
 */
export function getWorkshopMoment(now: Date = new Date()) {
  const month = now.getMonth();
  const day = now.getDate();
  const season = seasonNames[month];
  const ingredient = monthIngredient[month];
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const weekNumber = Math.ceil(dayOfYear / 7);

  return { season, ingredient, day, month: month + 1, weekNumber, dayOfYear };
}
