import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { DSP_CONTENT } from '../data/landingContent';
import { CtaButton } from './CtaButton';
import { CheckBadgeIcon } from './icons/BrandIcons';

interface DspSectionProps {
  onCtaClick: () => void;
}

const EQ_BARS_LEFT = [
  { height: '38%', dur: '1.15s', delay: '0.05s' },
  { height: '72%', dur: '1.45s', delay: '0.25s' },
  { height: '54%', dur: '1.05s', delay: '0.45s' },
  { height: '86%', dur: '1.6s', delay: '0.15s' },
  { height: '48%', dur: '1.25s', delay: '0.55s' },
  { height: '78%', dur: '1.35s', delay: '0.35s' },
  { height: '62%', dur: '1.5s', delay: '0.1s' },
  { height: '92%', dur: '1.2s', delay: '0.6s' },
];

const EQ_BARS_RIGHT = [...EQ_BARS_LEFT].reverse();

function EqualizerWing({
  bars,
  active,
  side,
}: {
  bars: typeof EQ_BARS_LEFT;
  active: boolean;
  side: 'left' | 'right';
}) {
  return (
    <div
      aria-hidden="true"
      data-eq-active={active ? 'true' : 'false'}
      className={`pointer-events-none hidden md:flex items-end gap-1.5 h-32 select-none transition-opacity duration-500 ${
        active ? 'opacity-25' : 'opacity-5'
      } ${side === 'left' ? 'left-6 lg:left-12' : 'right-6 lg:right-12'} absolute bottom-10`}
    >
      {bars.map((bar, i) => (
        <span
          key={i}
          style={
            {
              height: bar.height,
              '--eq-dur': bar.dur,
              '--eq-delay': bar.delay,
            } as React.CSSProperties
          }
          className={`w-1.5 rounded-t-[2px] bg-[#F36B1E] ${
            active ? 'animate-eq-bar' : 'scale-y-[0.25]'
          }`}
        />
      ))}
    </div>
  );
}

export function DspSection({ onCtaClick }: DspSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.22 });

  return (
    <section
      ref={sectionRef}
      id={DSP_CONTENT.id}
      aria-labelledby="dsp-heading"
      className="relative overflow-hidden bg-[#252525] px-4 py-12 sm:py-14 text-white"
    >
      {/* Subtle scroll-activated equalizer bars on the flanks */}
      <EqualizerWing bars={EQ_BARS_LEFT} active={isInView} side="left" />
      <EqualizerWing bars={EQ_BARS_RIGHT} active={isInView} side="right" />

      <div className="relative z-10 mx-auto max-w-[640px] text-center">
        <h2
          id="dsp-heading"
          className="text-[23px] sm:text-[27px] font-extrabold leading-[1.15] tracking-[-0.015em] text-[#F36B1E] [text-wrap:balance]"
        >
          {DSP_CONTENT.headingLine1}
          <br className="hidden sm:inline" /> {DSP_CONTENT.headingLine2}
        </h2>

        <ul className="mx-auto mt-7 max-w-[488px] space-y-2.5 text-left">
          {DSP_CONTENT.items.map((item, idx) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.42,
                delay: idx * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3.5 rounded-[6px] bg-[#1B1B1B] px-4 sm:px-5 py-3 transition-colors duration-150 hover:bg-[#161616]"
            >
              <CheckBadgeIcon />
              <div className="min-w-0">
                <h3 className="text-[12px] font-bold leading-[1.32] text-white">
                  {item.title}
                </h3>
                <p className="text-[11.5px] leading-[1.38] text-white/90">
                  {item.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-9">
          <CtaButton
            label={DSP_CONTENT.ctaLabel}
            sectionId={DSP_CONTENT.id}
            onCtaClick={onCtaClick}
          />
        </div>
      </div>
    </section>
  );
}
