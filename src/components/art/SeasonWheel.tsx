import { EtchDefs } from "./patterns";

const seasons = [
  { label: "wiosna", color: "var(--color-moss-500)" },
  { label: "lato", color: "var(--color-brass-400)" },
  { label: "jesień", color: "var(--color-rust-500)" },
  { label: "zima", color: "var(--color-ink-600)" },
];

export function SeasonWheel({ className }: { className?: string }) {
  const cx = 200;
  const cy = 200;
  const r = 150;
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Ilustracja: koło czterech pór roku wpływających na dostępne składniki">
      <EtchDefs />
      <rect width="400" height="400" fill="var(--color-parchment-50)" />
      {seasons.map((s, i) => {
        const a0 = (Math.PI / 2) * i - Math.PI / 2;
        const a1 = (Math.PI / 2) * (i + 1) - Math.PI / 2;
        const x0 = cx + r * Math.cos(a0);
        const y0 = cy + r * Math.sin(a0);
        const x1 = cx + r * Math.cos(a1);
        const y1 = cy + r * Math.sin(a1);
        const mx = cx + (r + 26) * Math.cos((a0 + a1) / 2);
        const my = cy + (r + 26) * Math.sin((a0 + a1) / 2);
        return (
          <g key={s.label}>
            <path
              d={`M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1} Z`}
              fill={s.color}
              opacity="0.28"
              stroke="var(--color-ink-900)"
              strokeWidth="1.6"
            />
            <text x={mx} y={my} textAnchor="middle" fontSize="14" fill="var(--color-ink-900)" fontFamily="var(--font-label)">
              {s.label}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="46" fill="var(--color-parchment-200)" stroke="var(--color-ink-900)" strokeWidth="2.4" />
      <path d="M188 190 q12 -14 24 0 q12 14 24 0" stroke="var(--color-ink-900)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
