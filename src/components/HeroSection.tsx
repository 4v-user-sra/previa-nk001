import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HERO_CONTENT } from '../data/landingContent';
import { CtaButton } from './CtaButton';
import { AlertCircleIcon, HalftoneOverlay } from './icons/BrandIcons';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [productImgError, setProductImgError] = useState(false);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative z-20 overflow-x-clip bg-[#0B0B0B] text-white"
    >
      {/* Background mixer console photo + contrast scrim */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src={HERO_CONTENT.backgroundImage.src}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
        <div className="absolute inset-y-0 right-0 sm:right-[6%] lg:right-[11%] flex justify-end opacity-35 sm:opacity-95 transition-opacity">
          <HalftoneOverlay />
        </div>
      </div>

      {/* Top-left prominent brand logo */}
      <div className="relative z-30 flex justify-start px-4 pt-3 md:absolute md:top-5 md:left-8 lg:left-12 md:p-0">
        <div className="inline-flex items-center justify-center rounded-[8px] border border-white/15 bg-[#0C0C0C]/90 px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.65)]">
          <img
            src={HERO_CONTENT.brandLogo.src}
            alt={HERO_CONTENT.brandLogo.alt}
            referrerPolicy="no-referrer"
            className="block h-auto w-[112px] sm:w-[132px] lg:w-[152px] select-none"
          />
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto max-w-[680px] px-4 pt-2 sm:pt-4 md:pt-5 pb-0 text-center">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[540px] text-[25px] sm:text-[34px] font-extrabold leading-[1.12] tracking-[-0.02em] text-white [text-wrap:balance]"
        >
          <span className="text-[#F36B1E]">{HERO_CONTENT.brandHighlight}</span>{' '}
          {HERO_CONTENT.headingLine1Rest}
          <br className="hidden sm:inline" /> {HERO_CONTENT.headingLine2}
          <br className="hidden sm:inline" /> {HERO_CONTENT.headingLine3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-2 max-w-[460px] text-[12px] sm:text-[12.5px] font-normal leading-[1.35] text-white/95"
        >
          {HERO_CONTENT.subheadlineLine1}
          <br className="hidden sm:inline" /> {HERO_CONTENT.subheadlineLine2}
        </motion.p>

        {/* Notice box: B2B hardware-only qualification filter with entrance + pulsing red/orange highlight */}
        <motion.div
          role="note"
          aria-label={HERO_CONTENT.notice.title}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="animate-notice-pulse mx-auto mt-3.5 flex max-w-[424px] items-center gap-3 rounded-[4px] border-2 border-[#F36B1E] bg-white px-3.5 py-2 text-left"
        >
          <AlertCircleIcon />
          <div className="text-[10px] leading-[1.32] text-[#D84315]">
            <p className="font-bold text-[#C62828]">{HERO_CONTENT.notice.title}</p>
            <p className="font-medium text-[#E65100]">{HERO_CONTENT.notice.text}</p>
          </div>
        </motion.div>

        <div className="mt-4">
          <CtaButton
            label={HERO_CONTENT.ctaLabel}
            sectionId="hero"
            onCtaClick={onCtaClick}
          />
        </div>

        {/* Overlapping NK 001 hardware cutout with smooth entrance slide */}
        <div className="relative z-20 mx-auto -mt-3 sm:-mt-4 w-[310px] sm:w-[374px] translate-y-[38px] sm:translate-y-[48px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {!productImgError ? (
              <img
                src={HERO_CONTENT.productImage.src}
                alt={HERO_CONTENT.productImage.alt}
                referrerPolicy="no-referrer"
                onError={() => setProductImgError(true)}
                className="block h-auto w-full select-none drop-shadow-[0_12px_22px_rgba(0,0,0,0.38)]"
              />
            ) : (
              <div className="mx-auto flex h-[78px] w-full items-center justify-center rounded border border-neutral-600 bg-neutral-800 px-4 text-xs font-bold tracking-wider text-white">
                TELENICK NK 001 · TRANSMISSOR FM/VHF 1UR
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
