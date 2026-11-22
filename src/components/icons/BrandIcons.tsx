import React from 'react';
import type { AudienceIconKey, SpecIconKey } from '../../data/landingContent';

export function HalftoneOverlay() {
  const rows = 20;
  const cols = 22;
  const dots: Array<{ cx: number; cy: number; r: number; key: string }> = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Diagonal falloff: largest at bottom-right (row=19, col=21), tapering toward top and left
      const rowNorm = row / (rows - 1); // 0 top -> 1 bottom
      const colNorm = col / (cols - 1); // 0 left -> 1 right
      const diagonalWeight = colNorm * 0.72 + rowNorm * 0.52 - 0.38;

      if (diagonalWeight > 0.04) {
        const radius = Math.min(6.2, Math.max(0.7, diagonalWeight * 6.8));
        dots.push({
          key: `${row}-${col}`,
          cx: 12 + col * 16.5,
          cy: 10 + row * 16.5,
          r: Number(radius.toFixed(2)),
        });
      }
    }
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 380 335"
      className="pointer-events-none select-none h-full w-auto"
      preserveAspectRatio="xMaxYMax slice"
    >
      {dots.map((dot) => (
        <circle
          key={dot.key}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="#F36B1E"
          fillOpacity={0.94}
        />
      ))}
    </svg>
  );
}

export function AlertCircleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-[#F36B1E]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9.5" />
      <line x1="12" y1="7.5" x2="12" y2="12.8" />
      <circle cx="12" cy="16.2" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckBadgeIcon() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-white"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="3.5 8.5 6.5 11.5 12.5 4.8" />
      </svg>
    </span>
  );
}

export function AudienceEventsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-11 w-11 text-current transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Back row audience heads */}
      <circle cx="20" cy="16" r="3.2" />
      <circle cx="32" cy="16" r="3.2" />
      <circle cx="44" cy="16" r="3.2" />
      {/* Front row heads */}
      <circle cx="15" cy="25" r="3.2" />
      <circle cx="26.5" cy="25" r="3.2" />
      <circle cx="37.5" cy="25" r="3.2" />
      <circle cx="49" cy="25" r="3.2" />
      {/* Shoulders */}
      <path d="M11 33c0-2.5 1.8-4 4-4s4 1.5 4 4" />
      <path d="M22.5 33c0-2.5 1.8-4 4-4s4 1.5 4 4" />
      <path d="M33.5 33c0-2.5 1.8-4 4-4s4 1.5 4 4" />
      <path d="M45 33c0-2.5 1.8-4 4-4s4 1.5 4 4" />
      {/* Control console / rack block */}
      <rect x="13" y="34" width="38" height="14" rx="2" fill="var(--card-bg, #D9D9D9)" />
      <rect x="17" y="38" width="5.5" height="6" rx="0.8" />
      <rect x="25.5" y="38" width="5.5" height="6" rx="0.8" />
      <rect x="34" y="38" width="5.5" height="6" rx="0.8" />
      <path d="M42.5 40.5l1.8 1.8 3.2-3.4" />
    </svg>
  );
}

export function AudienceChurchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-11 w-11 text-current transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cross */}
      <line x1="32" y1="8" x2="32" y2="17" />
      <line x1="28.5" y1="11.5" x2="35.5" y2="11.5" />
      {/* Central gable & steeple */}
      <polyline points="20 31 32 18 44 31" />
      <path d="M23 28v22h18V28" />
      {/* Side wings */}
      <path d="M23 36H13v14h10" />
      <path d="M41 36h10v14H41" />
      <line x1="11" y1="50" x2="53" y2="50" />
      {/* Side wing arched windows */}
      <path d="M16.5 44v-2.5a1.5 1.5 0 0 1 3 0V44h-3Z" />
      <path d="M44.5 44v-2.5a1.5 1.5 0 0 1 3 0V44h-3Z" />
      {/* Main arched doorway & heart */}
      <path d="M28 50v-8a4 4 0 0 1 8 0v8" />
      <path d="M32 32.5c-1.2-1.4-3.4-.8-3.4 1 0 1.6 3.4 3.5 3.4 3.5s3.4-1.9 3.4-3.5c0-1.8-2.2-2.4-3.4-1Z" />
    </svg>
  );
}

export function AudienceRentalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-11 w-11 text-current transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* House roof & body */}
      <polyline points="11 29 31 14 51 29" />
      <path d="M16 26v24h30V26" />
      {/* Coin / Dollar circle */}
      <circle cx="27" cy="36" r="8" fill="var(--card-bg, #D9D9D9)" />
      <path d="M27 31.5v9" />
      <path d="M29.4 33.5c0-1-1.1-1.6-2.4-1.6s-2.3.7-2.3 1.6c0 2.2 4.8 1.3 4.8 3.6 0 1-1.1 1.7-2.5 1.7s-2.4-.7-2.5-1.7" />
      {/* Key overlay right */}
      <circle cx="44" cy="30" r="6" fill="var(--card-bg, #D9D9D9)" />
      <circle cx="44" cy="30" r="2" />
      <path d="M44 36v13l3-2.2v-3.5l2.5-1.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <path d="M16.02 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.25.59 4.45 1.71 6.39L3.11 29l6.78-1.78a12.76 12.76 0 0 0 6.13 1.56h.01c7.06 0 12.79-5.73 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.72 12.72 0 0 0 16.02 3.2Zm7.46 18.18c-.32.89-1.84 1.7-2.55 1.81-.65.1-1.48.14-2.39-.15-.55-.18-1.26-.41-2.16-.8-3.81-1.64-6.3-5.48-6.49-5.74-.19-.25-1.55-2.06-1.55-3.93s.98-2.79 1.33-3.17c.35-.38.76-.48 1.02-.48h.73c.24 0 .56-.09.87.66.32.77 1.08 2.64 1.18 2.83.09.19.16.41.03.66-.13.26-.19.41-.38.63-.19.22-.4.5-.57.67-.19.19-.39.4-.17.78.22.38.98 1.62 2.11 2.62 1.45 1.29 2.67 1.69 3.05 1.88.38.19.6.16.82-.1.22-.25.95-1.11 1.2-1.49.26-.38.51-.32.86-.19.35.13 2.22 1.05 2.6 1.24.38.19.64.29.73.44.1.16.1.92-.22 1.81Z" />
    </svg>
  );
}

export function AudienceIcon({ name }: { name: AudienceIconKey }) {
  switch (name) {
    case 'events':
      return <AudienceEventsIcon />;
    case 'church':
      return <AudienceChurchIcon />;
    case 'rental':
      return <AudienceRentalIcon />;
  }
}

export function SpecRackIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-14 w-14 text-current transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer signal waves */}
      <path d="M16.5 46A21 21 0 1 1 47.5 46" />
      <path d="M21.2 41.5A14.5 14.5 0 1 1 42.8 41.5" />
      <path d="M26 37A8.5 8.5 0 1 1 38 37" />
      {/* Central transmitter tower */}
      <circle cx="32" cy="31" r="2.6" />
      <line x1="32" y1="33.6" x2="32" y2="51" />
      <line x1="25" y1="51" x2="39" y2="51" />
    </svg>
  );
}

export function SpecFrequencyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-14 w-14 text-current transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Central speech/channel bubble */}
      <path d="M24 26h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H30l-5 4v-4h-1a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z" />
      <circle cx="27.5" cy="34" r="1" fill="currentColor" stroke="none" />
      <circle cx="32" cy="34" r="1" fill="currentColor" stroke="none" />
      <circle cx="36.5" cy="34" r="1" fill="currentColor" stroke="none" />
      {/* Connected nodes */}
      <circle cx="32" cy="14" r="3" />
      <line x1="32" y1="17" x2="32" y2="26" />
      <circle cx="14" cy="21" r="3" />
      <line x1="16.5" y1="22.8" x2="21.5" y2="27" />
      <circle cx="50" cy="25" r="3" />
      <line x1="47.2" y1="26.2" x2="44" y2="29" />
      <circle cx="15" cy="44" r="3" />
      <line x1="17.8" y1="42.5" x2="21.5" y2="40" />
      <circle cx="48" cy="48" r="3" />
      <line x1="45.5" y1="46" x2="41.5" y2="42" />
    </svg>
  );
}

export function SpecConnectivityIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-14 w-14 text-current transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Triangle outer ring connections */}
      <circle cx="32" cy="16" r="5.5" />
      <circle cx="18" cy="42" r="5.5" />
      <circle cx="46" cy="42" r="5.5" />
      {/* Arcs connecting outer nodes */}
      <path d="M27.2 19.2A17 17 0 0 0 17.5 36.5" />
      <path d="M36.8 19.2A17 17 0 0 1 46.5 36.5" />
      <path d="M23 45.2A17 17 0 0 0 41 45.2" />
      {/* Center hub & spokes */}
      <circle cx="32" cy="34" r="3.5" />
      <line x1="32" y1="21.5" x2="32" y2="30.5" />
      <line x1="22.5" y1="39.5" x2="29" y2="35.8" />
      <line x1="41.5" y1="39.5" x2="35" y2="35.8" />
    </svg>
  );
}

export function SpecWarrantyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-14 w-14 text-current transition-transform duration-200 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Rosette seal */}
      <path d="M32 14l4.2 3.2 5.3-.5 2.1 4.9 4.9 2.1-.5 5.3 3.2 4.2-3.2 4.2.5 5.3-4.9 2.1-2.1 4.9-5.3-.5L32 52.4l-4.2-3.2-5.3.5-2.1-4.9-4.9-2.1.5-5.3-3.2-4.2 3.2-4.2-.5-5.3 4.9-2.1 2.1-4.9 5.3.5L32 14Z" />
      {/* Inner circle & checkmark */}
      <circle cx="32" cy="33.2" r="10.5" />
      <polyline points="27.2 33.4 30.6 36.8 37.2 29.8" />
      {/* Ribbon tails */}
      <polyline points="24 49.5 21.5 56 26.5 53.5 29 56 29.8 50.8" />
      <polyline points="40 49.5 42.5 56 37.5 53.5 35 56 34.2 50.8" />
      {/* Sparkle stars */}
      <path d="M16 16v4M14 18h4" />
      <path d="M49 15v5M46.5 17.5h5" />
      <path d="M52 38v4M50 40h4" />
    </svg>
  );
}

export function SpecIcon({ name }: { name: SpecIconKey }) {
  switch (name) {
    case 'rack':
      return <SpecRackIcon />;
    case 'frequency':
      return <SpecFrequencyIcon />;
    case 'connectivity':
      return <SpecConnectivityIcon />;
    case 'warranty':
      return <SpecWarrantyIcon />;
  }
}
