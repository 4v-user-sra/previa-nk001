import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MIN_DWELL_MS_FOR_POPUP,
  shouldTriggerExitIntent,
} from './retention';

test('does not trigger exit intent before 12 seconds on screen', () => {
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 2,
      elapsedMs: 0,
      hasClickedWhatsApp: false,
      hasShownExitModal: false,
    }),
    false,
  );
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 0,
      elapsedMs: MIN_DWELL_MS_FOR_POPUP - 1,
      hasClickedWhatsApp: false,
      hasShownExitModal: false,
    }),
    false,
  );
});

test('triggers exit intent when cursor exits near top edge after 12 seconds without WhatsApp click', () => {
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 4,
      elapsedMs: MIN_DWELL_MS_FOR_POPUP,
      hasClickedWhatsApp: false,
      hasShownExitModal: false,
    }),
    true,
  );
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 0,
      elapsedMs: 25_000,
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
      elapsedMs: 20_000,
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
      elapsedMs: 20_000,
      hasClickedWhatsApp: true,
      hasShownExitModal: false,
    }),
    false,
  );
  assert.equal(
    shouldTriggerExitIntent({
      clientY: 2,
      elapsedMs: 20_000,
      hasClickedWhatsApp: false,
      hasShownExitModal: true,
    }),
    false,
  );
});
