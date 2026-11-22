import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AudiencesSection } from './components/AudiencesSection';
import { DspSection } from './components/DspSection';
import { SpecsSection } from './components/SpecsSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { ExitIntentModal } from './components/ExitIntentModal';
import { shouldTriggerExitIntent } from './utils/retention';

export default function App() {
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const hasClickedWhatsAppRef = useRef(false);
  const hasShownExitModalRef = useRef(false);

  const handleCtaClick = useCallback(() => {
    hasClickedWhatsAppRef.current = true;
  }, []);

  const handleCloseExitModal = useCallback(() => {
    setIsExitModalOpen(false);
  }, []);

  useEffect(() => {
    const mountedAt = Date.now();

    const handleMouseLeave = (event: MouseEvent) => {
      if (
        shouldTriggerExitIntent({
          clientY: event.clientY,
          elapsedMs: Date.now() - mountedAt,
          hasClickedWhatsApp: hasClickedWhatsAppRef.current,
          hasShownExitModal: hasShownExitModalRef.current,
        })
      ) {
        hasShownExitModalRef.current = true;
        setIsExitModalOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#252525]">
      <main>
        <HeroSection onCtaClick={handleCtaClick} />
        <AudiencesSection onCtaClick={handleCtaClick} />
        <DspSection onCtaClick={handleCtaClick} />
        <SpecsSection onCtaClick={handleCtaClick} />
        <FinalCtaSection onCtaClick={handleCtaClick} />
      </main>
      <FooterSection />
      <FloatingWhatsAppButton onCtaClick={handleCtaClick} />
      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={handleCloseExitModal}
        onCtaClick={handleCtaClick}
      />
    </div>
  );
}
