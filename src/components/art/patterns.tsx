export function EtchDefs() {
  return (
    <defs>
      <pattern id="hatch" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="4" stroke="#241c14" strokeWidth="0.7" opacity="0.55" />
      </pattern>
      <pattern id="hatchCross" width="4" height="4" patternTransform="rotate(-45)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="4" stroke="#241c14" strokeWidth="0.5" opacity="0.35" />
      </pattern>
      <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="1.2" cy="1.2" r="0.9" fill="#241c14" opacity="0.4" />
      </pattern>
    </defs>
  );
}
