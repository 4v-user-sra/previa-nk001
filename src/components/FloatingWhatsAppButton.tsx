import React from 'react';
import { CTA_URL, RETENTION_CONTENT } from '../data/landingContent';
import { WhatsAppIcon } from './icons/BrandIcons';

interface FloatingWhatsAppButtonProps {
  onCtaClick: () => void;
}

export function FloatingWhatsAppButton({ onCtaClick }: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={RETENTION_CONTENT.floatingWhatsApp.ariaLabel}
      title={RETENTION_CONTENT.floatingWhatsApp.tooltip}
      data-cta-section="floating_whatsapp"
      onClick={onCtaClick}
      className="animate-whatsapp-rock fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#14853B] text-white shadow-[0_6px_20px_rgba(0,0,0,0.42)] transition-colors duration-150 hover:scale-105 hover:bg-[#189E46] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#189E46]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
