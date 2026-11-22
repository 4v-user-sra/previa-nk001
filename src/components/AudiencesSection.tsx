import React from 'react';
import { motion } from 'motion/react';
import { AUDIENCES_CONTENT } from '../data/landingContent';
import { CtaButton } from './CtaButton';
import { AudienceIcon } from './icons/BrandIcons';

interface AudiencesSectionProps {
  onCtaClick: () => void;
}

export function AudiencesSection({ onCtaClick }: AudiencesSectionProps) {
  return (
    <section
      id={AUDIENCES_CONTENT.id}
      aria-labelledby="audiences-heading"
      className="bg-[#F2F2F2] px-4 pt-[70px] sm:pt-[82px] pb-12 sm:pb-14 text-[#222222]"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[680px] text-center"
      >
        <h2
          id="audiences-heading"
          className="text-[23px] sm:text-[27px] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#F36B1E] [text-wrap:balance]"
        >
          {AUDIENCES_CONTENT.headingLine1}
          <br className="hidden sm:inline" /> {AUDIENCES_CONTENT.headingLine2}
        </h2>

        <p className="mx-auto mt-3 max-w-[440px] text-[12px] sm:text-[12.5px] leading-[1.4] text-[#444444]">
          {AUDIENCES_CONTENT.introPrefix}
          <strong className="font-bold text-[#222222]">
            {AUDIENCES_CONTENT.introStrong}
          </strong>
          {AUDIENCES_CONTENT.introLine1Rest}
          <br className="hidden sm:inline" /> {AUDIENCES_CONTENT.introLine2}
        </p>

        <div className="mx-auto mt-7 grid max-w-[650px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-3 sm:gap-10">
          {AUDIENCES_CONTENT.items.map((item) => (
            <article
              key={item.id}
              className="group flex min-h-[206px] w-full max-w-[280px] sm:max-w-[186px] cursor-default flex-col items-center rounded-[8px] border border-transparent bg-[var(--card-bg)] [--card-bg:#D9D9D9] hover:[--card-bg:#E4E4E4] px-4 py-5 text-center transition-all duration-200 hover:-translate-y-1.5 hover:border-[#F36B1E]/45 hover:shadow-[0_14px_26px_rgba(0,0,0,0.14)]"
            >
              <div className="mb-2.5 flex h-11 items-center justify-center text-[#181818] transition-colors duration-200 group-hover:text-[#F36B1E]">
                <AudienceIcon name={item.icon} />
              </div>
              <h3 className="mb-2 text-[11.5px] font-bold leading-[1.28] text-[#222222] transition-colors duration-200 group-hover:text-[#111111]">
                {item.titleLines[0]}
                <br />
                {item.titleLines[1]}
              </h3>
              <p className="text-[10.5px] leading-[1.38] text-[#444444]">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-9">
          <CtaButton
            label={AUDIENCES_CONTENT.ctaLabel}
            sectionId={AUDIENCES_CONTENT.id}
            onCtaClick={onCtaClick}
          />
        </div>
      </motion.div>
    </section>
  );
}
