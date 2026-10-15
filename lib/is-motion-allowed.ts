export const MOTION_READY_CLASS = 'motion-ready'

export function isMotionAllowed(): boolean {
  return document.documentElement.classList.contains(MOTION_READY_CLASS)
}
