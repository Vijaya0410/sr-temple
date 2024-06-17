/* eslint-disable no-nested-ternary */
const fadein = (direction: string, delay: any) => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,

  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
export default fadein;
