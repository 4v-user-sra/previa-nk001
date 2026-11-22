import test from 'node:test';
import assert from 'node:assert/strict';
import { shouldTriggerExitIntent } from './retention';

test('triggers exit intent when cursor exits near top edge without WhatsApp click', () => {
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 4,
      hasClickedWhatsApp: false,
      hasShownExitModal: false,
    }),
    true,
  );
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 0,
      hasClickedWhatsApp: false,
      hasShownExitModal: false,
    }),
    true,
  );
});

test('does not trigger exit intent when cursor moves inside viewport', () => {
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 120,
      hasClickedWhatsApp: false,
      hasShownExitModal: false,
    }),
    false,
  );
});

test('does not trigger exit intent if user already clicked WhatsApp or modal was already shown', () => {
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 2,
      hasClickedWhatsApp: true,
      hasShownExitModal: false,
    }),
    false,
  );
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 2,
      hasClickedWhatsApp: false,
      hasShownExitModal: true,
    }),
    false,
  );
});
