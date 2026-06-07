/**
 * Shared animation variants for Events and EventDetail pages
 */

export const easeSmooth = [0.22, 1, 0.36, 1];
export const easeConfident = [0.4, 0, 0.2, 1];

// Page transitions
export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeSmooth },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: easeSmooth },
  },
};

// Fade + slide on load
export const fadeSlideUp = {
  initial: { opacity: 0, y: 24 },
  animate: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: easeSmooth },
  }),
};

// Letter stagger for titles
export const letterStagger = {
  animate: (staggerChildren = 0.02) => ({
    transition: { staggerChildren, delayChildren: 0.1 },
  }),
};

export const letterItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeSmooth },
  },
};

// Card hover effects
export const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: easeSmooth },
  },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

// Premium card with 3D tilt and glow
export const premiumCardVariants = {
  rest: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: {
    scale: 1.03,
    rotateX: 2,
    rotateY: -2,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
  tap: { scale: 0.98 },
};

// Date fade-in after title
export const dateFadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

// Scroll reveal (use with useInView)
export const scrollReveal = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});
