export interface ExitIntentState {
  clientY: number;
  hasClickedWhatsApp: boolean;
  hasShownExitModal: boolean;
}

export const EXIT_INTENT_THRESHOLD_Y = 12;

export function shouldTriggerExitIntent({
  clientY,
  hasClickedWhatsApp,
  hasShownExitModal,
}: ExitIntentState): boolean {
  if (hasClickedWhatsApp || hasShownExitModal) {
    return false;
  }
  return clientY <= EXIT_INTENT_THRESHOLD_Y;
}
