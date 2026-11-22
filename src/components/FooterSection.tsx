import React from 'react';
import { FOOTER_CONTENT } from '../data/landingContent';

export function FooterSection() {
  return (
    <footer
      id={FOOTER_CONTENT.id}
      className="bg-[#141414] px-4 py-3.5 text-center text-white"
    >
      <p className="text-[10px] sm:text-[10.5px] leading-relaxed text-white">
        <strong className="font-bold">{FOOTER_CONTENT.copyrightBold}</strong>{' '}
        <span aria-hidden="true">|</span>{' '}
        <span className="font-normal">{FOOTER_CONTENT.rightsRegular}</span>
      </p>
    </footer>
  );
}
