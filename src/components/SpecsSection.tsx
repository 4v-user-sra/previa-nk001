import React from 'react';
import { SPECS_CONTENT } from '../data/landingContent';
import { CtaButton } from './CtaButton';
import { SpecIcon } from './icons/BrandIcons';

interface SpecsSectionProps {
  onCtaClick: () => void;
}

export function SpecsSection({ onCtaClick }: SpecsSectionProps) {
  return (
    <section
      id={SPECS_CONTENT.id}
      aria-labelledby="specs-heading"
      className="bg-[#EFF2F5] px-4 py-12 sm:py-14 text-[#222222]"
    >
      <div className="mx-auto max-w-[680px] text-center">
        <h2
          id="specs-heading"
          className="text-[23px] sm:text-[27px] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#F36B1E] [text-wrap:balance]"
        >
          {SPECS_CONTENT.headingLine1}
          <br className="hidden sm:inline" /> {SPECS_CONTENT.headingLine2}
        </h2>

        <div className="mx-auto mt-8 grid max-w-[650px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {SPECS_CONTENT.items.map((item, idx) => {
            const isLast = idx === SPECS_CONTENT.items.length - 1;
            const isSecond = idx === 1;

            return (
              <div
                key={item.id}
                className={`group flex cursor-default flex-col items-center rounded-[6px] px-3.5 py-4 md:py-2.5 text-center border-[#B5C4D1] transition-all duration-200 hover:bg-white/80 hover:shadow-[0_8px_20px_rgba(15,23,42,0.06)] ${
                  !isLast ? 'border-b md:border-b-0 md:border-r' : ''
                } ${isSecond ? 'sm:border-r-0 md:border-r' : ''} ${
                  idx === 0 || idx === 2 ? 'sm:border-r' : ''
                } ${idx >= 2 ? 'sm:border-b-0' : ''}`}
              >
                <div className="mb-3 flex h-14 items-center justify-center text-[#111111] transition-colors duration-200 group-hover:text-[#F36B1E]">
                  <SpecIcon name={item.icon} />
                </div>
                <h3 className="mb-1.5 text-[11.5px] font-bold leading-[1.25] text-[#222222] transition-colors duration-200 group-hover:text-[#F36B1E]">
                  {item.title}
                </h3>
                <p className="text-[10.5px] leading-[1.38] text-[#444444] tabular-nums transition-colors duration-200 group-hover:text-[#111111] group-hover:font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-9">
          <CtaButton
            label={SPECS_CONTENT.ctaLabel}
            sectionId={SPECS_CONTENT.id}
            onCtaClick={onCtaClick}
          />
        </div>
      </div>
    </section>
  );
}
