import { EtchDefs } from "./patterns";

export function OrdersBoard({ className }: { className?: string }) {
  const notes = [
    { x: 40, y: 40, r: -4, c: "var(--color-parchment-200)" },
    { x: 190, y: 30, r: 3, c: "var(--color-brass-400)" },
    { x: 320, y: 50, r: -2, c: "var(--color-parchment-200)" },
    { x: 90, y: 170, r: 2, c: "var(--color-parchment-200)" },
    { x: 250, y: 190, r: -3, c: "var(--color-rust-500)" },
  ];
  return (
    <svg viewBox="0 0 460 320" className={className} role="img" aria-label="Ilustracja: tablica ogłoszeń z zawieszonymi karteczkami zleceń mieszkańców">
      <EtchDefs />
      <rect width="460" height="320" fill="var(--color-parchment-50)" />
      <rect x="20" y="20" width="420" height="280" rx="6" fill="var(--color-ink-700)" opacity="0.15" />
      <rect x="20" y="20" width="420" height="280" rx="6" fill="none" stroke="var(--color-ink-900)" strokeWidth="3" />
      {notes.map((n, i) => (
        <g key={i} transform={`translate(${n.x + 60},${n.y + 60}) rotate(${n.r})`}>
          <rect x="-40" y="-30" width="80" height="60" fill={n.c} stroke="var(--color-ink-900)" strokeWidth="1.6" opacity={n.c.includes("parchment") ? 1 : 0.55} />
          <circle cx="0" cy="-30" r="3" fill="var(--color-ink-900)" />
          <line x1="-24" y1="-10" x2="24" y2="-10" stroke="var(--color-ink-800)" strokeWidth="1.4" opacity="0.6" />
          <line x1="-24" y1="0" x2="18" y2="0" stroke="var(--color-ink-800)" strokeWidth="1.4" opacity="0.6" />
          <line x1="-24" y1="10" x2="22" y2="10" stroke="var(--color-ink-800)" strokeWidth="1.4" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}
