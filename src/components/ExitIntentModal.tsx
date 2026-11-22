import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { CTA_URL, RETENTION_CONTENT } from '../data/landingContent';
import { WhatsAppIcon } from './icons/BrandIcons';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCtaClick: () => void;
}

export function ExitIntentModal({
  isOpen,
  onClose,
  onCtaClick,
}: ExitIntentModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[430px] rounded-[8px] border-2 border-[#F36B1E] bg-[#1F1F1F] p-6 sm:p-7 text-center text-white shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute right-2.5 top-2.5 inline-flex h-10 w-10 items-center justify-center rounded-[6px] text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F36B1E]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <h2
          id="exit-intent-title"
          className="mx-auto mt-1 max-w-[330px] text-[20px] sm:text-[22px] font-extrabold leading-[1.2] text-[#F36B1E] [text-wrap:balance]"
        >
          {RETENTION_CONTENT.exitIntent.title}
        </h2>

        <p className="mx-auto mt-3 max-w-[350px] text-[13px] sm:text-[14px] font-medium leading-[1.45] text-white/95">
          {RETENTION_CONTENT.exitIntent.message}
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta-section="exit_intent_modal"
            onClick={() => {
              onCtaClick();
              onClose();
            }}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-[8px] bg-[#14853B] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.03em] text-white whitespace-nowrap shadow-[0_4px_14px_rgba(20,133,59,0.35)] transition-all duration-150 hover:scale-[1.02] hover:bg-[#189E46] hover:shadow-[0_8px_22px_rgba(24,158,70,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#189E46]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>{RETENTION_CONTENT.exitIntent.ctaLabel}</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[40px] px-3 py-1.5 text-[12px] font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {RETENTION_CONTENT.exitIntent.dismissLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
