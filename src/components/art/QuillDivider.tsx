export function QuillDivider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} role="img" aria-label="Ozdobny ornament: gęsie pióro i kałamarz">
      <g stroke="var(--color-ink-900)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 46c8-18 24-30 42-34" />
        <path d="M62 12l6 6" />
        <path d="M20 46l-6 6" />
        <ellipse cx="150" cy="42" rx="20" ry="10" fill="var(--color-ink-900)" opacity="0.08" />
        <ellipse cx="150" cy="42" rx="20" ry="10" />
        <path d="M136 38q14-6 28 0" opacity="0.5" />
      </g>
      <line x1="0" y1="55" x2="200" y2="55" stroke="var(--color-ink-900)" strokeOpacity="0.15" />
    </svg>
  );
}
