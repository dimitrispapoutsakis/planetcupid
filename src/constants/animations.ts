/* Timing Functions... */
export const butteryCubicBezier = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const transitionDuration25 = '.25s';
/* Animations... */
export const scaleIn = [
  {
    transform: 'scale3d(1.1, 1.1, 1.1)',
    opacity: 0,
    filter: 'blur(10px)',
    'animation-timing-function': butteryCubicBezier,
  },
  {
    opacity: 1,
    transform: 'scale3d(1, 1, 1)',
    filter: 'blur(0px)',
    'animation-timing-function': butteryCubicBezier,
  },
]

