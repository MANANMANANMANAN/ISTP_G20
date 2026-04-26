// import Lenis from "@studio-freight/lenis";

// export default function initSmoothScroll() {
//   const lenis = new Lenis({
//     smooth: true,
//     lerp: 0.08,
//   });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);

//   return lenis;
// }
import Lenis from "@studio-freight/lenis";

export default function initSmoothScroll() {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.08,
  });

  return lenis;
}