import React from 'react';
import { FINAL_CTA_CONTENT } from '../data/landingContent';
import { CtaButton } from './CtaButton';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  return (
    <section
      id={FINAL_CTA_CONTENT.id}
      aria-labelledby="final-cta-heading"
      className="bg-[#252525] px-4 py-12 sm:py-14 text-center text-white"
    >
      <div className="mx-auto max-w-[600px]">
        <h2
          id="final-cta-heading"
          className="text-[23px] sm:text-[27px] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#F36B1E] [text-wrap:balance]"
        >
          {FINAL_CTA_CONTENT.headingLine1}
          <br className="hidden sm:inline" /> {FINAL_CTA_CONTENT.headingLine2}
        </h2>

        <p className="mx-auto mt-4 max-w-[440px] text-[12px] sm:text-[12.5px] font-bold leading-[1.45] text-white">
          {FINAL_CTA_CONTENT.text}
        </p>

        <div className="mt-8">
          <CtaButton
            label={FINAL_CTA_CONTENT.ctaLabel}
            sectionId={FINAL_CTA_CONTENT.id}
            pulse={true}
            onCtaClick={onCtaClick}
          />
        </div>
      </div>
    </section>
  );
}
