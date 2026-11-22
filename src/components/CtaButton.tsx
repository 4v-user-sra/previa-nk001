import React from 'react';
import { CTA_URL } from '../data/landingContent';

interface CtaButtonProps {
  label: string;
  sectionId: string;
  pulse?: boolean;
  onCtaClick?: () => void;
  className?: string;
}

export function CtaButton({
  label,
  sectionId,
  pulse = false,
  onCtaClick,
  className = '',
}: CtaButtonProps) {
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-section={sectionId}
      onClick={onCtaClick}
      className={`inline-flex items-center justify-center rounded-[8px] bg-[#14853B] px-7 py-2.5 min-h-[42px] min-w-[275px] sm:min-w-[295px] text-center text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.03em] text-white whitespace-nowrap shadow-[0_2px_8px_rgba(20,133,59,0.28)] transition-all duration-150 hover:scale-[1.03] hover:bg-[#189E46] hover:shadow-[0_8px_20px_rgba(24,158,70,0.38)] active:scale-[0.99] active:bg-[#106B2F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#189E46] ${
        pulse ? 'animate-cta-pulse' : ''
      } ${className}`}
    >
      {label}
    </a>
  );
}
