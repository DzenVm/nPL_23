import { EtchDefs } from "./patterns";

export function WorkshopScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label="Ilustracja: kącik warsztatu z retortami, słojami składników i suszonymi ziołami na półce">
      <EtchDefs />
      <rect x="0" y="0" width="480" height="360" fill="var(--color-parchment-50)" />
      <g stroke="var(--color-ink-900)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* shelf */}
        <line x1="30" y1="80" x2="450" y2="80" strokeWidth="3" />
        <line x1="30" y1="82" x2="30" y2="330" />
        <line x1="450" y1="82" x2="450" y2="330" />
        {/* jars on shelf */}
        {[70, 130, 190].map((x, i) => (
          <g key={x}>
            <rect x={x} y={40} width="34" height="38" rx="4" fill="var(--color-parchment-200)" />
            <rect x={x + 6} y={32} width="22" height="10" rx="2" fill="var(--color-brass-400)" />
            <path d={`M${x + 8} ${58} q10 ${-10 - i * 3} 18 0`} stroke="var(--color-moss-600)" />
          </g>
        ))}
        {/* dried herbs bundle */}
        <path d="M270 32 q4 20 -2 40" />
        <path d="M280 30 q0 22 4 42" />
        <path d="M290 34 q-2 18 6 38" />
        <path d="M262 30l36 -4" strokeWidth="3" />
        {/* main bench */}
        <rect x="40" y="230" width="400" height="14" fill="var(--color-ink-700)" stroke="none" />
        <line x1="60" y1="244" x2="60" y2="320" />
        <line x1="420" y1="244" x2="420" y2="320" />
        {/* retort / alembic */}
        <g transform="translate(150,150)">
          <path d="M0 60 v-30 l-18 -35 h36 l-18 35" fill="var(--color-parchment-200)" />
          <ellipse cx="0" cy="60" rx="26" ry="14" fill="url(#hatch)" stroke="var(--color-ink-900)" />
          <path d="M18 -5 q28 4 24 26" strokeWidth="2.4" />
          <circle cx="42" cy="24" r="5" fill="var(--color-rust-500)" stroke="none" />
        </g>
        {/* mortar and pestle */}
        <g transform="translate(300,190)">
          <path d="M-24 10 q0 26 24 26 q24 0 24 -26 z" fill="var(--color-parchment-200)" />
          <line x1="-6" y1="-18" x2="14" y2="10" strokeWidth="4" />
          <circle cx="0" cy="4" r="9" fill="var(--color-moss-500)" stroke="none" opacity="0.85" />
        </g>
        {/* candle */}
        <g transform="translate(380,180)">
          <rect x="-6" y="0" width="12" height="46" rx="2" fill="var(--color-parchment-300)" />
          <path d="M0 -14 q8 8 0 16 q-8 -8 0 -16" fill="var(--color-rust-500)" stroke="none" />
        </g>
        {/* window with plant */}
        <rect x="360" y="40" width="60" height="60" rx="2" />
        <line x1="390" y1="40" x2="390" y2="100" />
        <line x1="360" y1="70" x2="420" y2="70" />
        <path d="M375 100 q0 -30 -14 -40" stroke="var(--color-moss-600)" />
        <path d="M375 100 q4 -22 18 -30" stroke="var(--color-moss-600)" />
      </g>
    </svg>
  );
}
