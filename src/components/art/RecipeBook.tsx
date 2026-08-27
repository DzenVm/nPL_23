import { EtchDefs } from "./patterns";

export function RecipeBook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 460 340" className={className} role="img" aria-label="Ilustracja: otwarta księga receptur z odręcznym diagramem łączenia właściwości składników">
      <EtchDefs />
      <rect width="460" height="340" fill="var(--color-parchment-50)" />
      <g stroke="var(--color-ink-900)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 60 q190 -30 190 0 v220 q-190 -26 -190 0 z" fill="var(--color-parchment-200)" />
        <path d="M420 60 q-190 -30 -190 0 v220 q190 -26 190 0 z" fill="var(--color-parchment-200)" />
        <line x1="230" y1="60" x2="230" y2="280" strokeWidth="3" />
        {[100, 130, 160, 190].map((y) => (
          <line key={y} x1="65" y1={y} x2="195" y2={y - 6} stroke="var(--color-ink-700)" strokeWidth="1" opacity="0.5" />
        ))}
        {[100, 130, 160, 190].map((y) => (
          <line key={"r" + y} x1="265" y1={y - 6} x2="395" y2={y} stroke="var(--color-ink-700)" strokeWidth="1" opacity="0.5" />
        ))}
        <g transform="translate(230,180)">
          <circle r="34" fill="var(--color-parchment-100)" />
          <circle cx="-46" cy="-22" r="16" fill="url(#hatch)" stroke="var(--color-ink-900)" />
          <circle cx="46" cy="-22" r="16" fill="url(#hatchCross)" stroke="var(--color-ink-900)" />
          <circle cx="0" cy="46" r="16" fill="var(--color-brass-400)" opacity="0.5" stroke="var(--color-ink-900)" />
          <line x1="-46" y1="-22" x2="0" y2="0" strokeWidth="1.4" />
          <line x1="46" y1="-22" x2="0" y2="0" strokeWidth="1.4" />
          <line x1="0" y1="46" x2="0" y2="0" strokeWidth="1.4" />
          <path d="M-8 -6 l6 6 l10 -12" strokeWidth="2.4" />
        </g>
      </g>
    </svg>
  );
}
