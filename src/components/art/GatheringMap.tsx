import { EtchDefs } from "./patterns";

export function GatheringMap({ className }: { className?: string }) {
  const nodes = [
    [60, 200], [130, 120], [130, 260], [220, 60], [220, 200], [220, 320],
    [310, 120], [310, 260], [400, 200],
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5],
    [3, 6], [4, 6], [4, 7], [5, 7], [6, 8], [7, 8],
  ];
  return (
    <svg viewBox="0 0 460 380" className={className} role="img" aria-label="Ilustracja: mapa ścieżek do zbierania składników w formie rozgałęzionej trasy">
      <EtchDefs />
      <rect width="460" height="380" fill="var(--color-parchment-50)" />
      <g stroke="var(--color-ink-700)" strokeWidth="1.6" opacity="0.7">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} strokeDasharray={i % 3 === 0 ? "1 6" : undefined} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <circle r={i === 0 ? 16 : 10} fill="var(--color-parchment-200)" stroke="var(--color-ink-900)" strokeWidth="2" />
          {i !== 0 && (
            <path
              d="M0 -4 q-3 4 0 8 q3 -4 0 -8"
              fill={i % 2 === 0 ? "var(--color-moss-600)" : "var(--color-rust-500)"}
              stroke="none"
            />
          )}
        </g>
      ))}
      <text x="60" y="204" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="var(--color-parchment-50)" fontFamily="var(--font-label)">
        TY
      </text>
    </svg>
  );
}
