import test from 'node:test';
import assert from 'node:assert/strict';
import {
  AUDIENCES_CONTENT,
  CTA_URL,
  DSP_CONTENT,
  FINAL_CTA_CONTENT,
  FOOTER_CONTENT,
  HERO_CONTENT,
  SPECS_CONTENT,
  WHATSAPP_CONFIG,
  buildWhatsAppUrl,
} from './landingContent';

test('buildWhatsAppUrl encodes phone and prefilled message cleanly', () => {
  const url = buildWhatsAppUrl();
  assert.equal(
    url,
    'https://api.whatsapp.com/send/?phone=5535910217131&text=Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20de%20transmissores%20NK%20001%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!&type=phone_number&app_absent=0',
  );
  assert.equal(CTA_URL, url);
});

test('buildWhatsAppUrl strips non-digit characters and rejects empty phones', () => {
  const formatted = buildWhatsAppUrl('+55 (35) 91021-7131', 'Teste NK 001');
  assert.match(formatted, /^https:\/\/api\.whatsapp\.com\/send\/\?phone=5535910217131&text=Teste%20NK%20001/);
  assert.throws(() => buildWhatsAppUrl('abc', 'msg'), /must contain digits/);
});

test('all 6 sections match required item counts and non-empty copy', () => {
  assert.equal(HERO_CONTENT.brandHighlight, 'NK 001:');
  assert.equal(HERO_CONTENT.brandLogo.src, '/assets/telenick-logo.png');
  assert.equal(HERO_CONTENT.ctaLabel, WHATSAPP_CONFIG.heroCtaLabel);
  assert.equal(AUDIENCES_CONTENT.items.length, 3);
  assert.equal(DSP_CONTENT.items.length, 3);
  assert.equal(SPECS_CONTENT.items.length, 4);
  assert.ok(FINAL_CTA_CONTENT.text.includes('FM/VHF'));
  assert.ok(FOOTER_CONTENT.copyrightBold.includes('2026'));
});
