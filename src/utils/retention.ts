export interface ExitIntentState {
  clientY: number;
  elapsedMs: number;
  hasClickedWhatsApp: boolean;
  hasShownExitModal: boolean;
}

export const EXIT_INTENT_THRESHOLD_Y = 12;
export const MIN_DWELL_MS_FOR_POPUP = 12_000;

export function shouldTriggerExitIntent({
  clientY,
  elapsedMs,
  hasClickedWhatsApp,
  hasShownExitModal,
}: ExitIntentState): boolean {
  if (hasClickedWhatsApp || hasShownExitModal) {
    return false;
  }
  if (elapsedMs < MIN_DWELL_MS_FOR_POPUP) {
    return false;
  }
  return clientY <= EXIT_INTENT_THRESHOLD_Y;
}
