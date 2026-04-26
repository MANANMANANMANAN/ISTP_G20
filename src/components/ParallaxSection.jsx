// import { useEffect, useRef } from "react";
// import gsap from "../utils/gsapSetup";

// export default function ParallaxSection({ image, text }) {
//   const sectionRef = useRef();
//   const imgRef = useRef();
//   const textRef = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         imgRef.current,
//         { scale: 1.2 },
//         {
//           scale: 1,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );

//       gsap.fromTo(
//         textRef.current,
//         { opacity: 0, y: 80 },
//         {
//           opacity: 1,
//           y: 0,
//           scrollTrigger: {
//             trigger: textRef.current,
//             start: "top 80%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert(); // ✅ GSAP context cleans up everything safely
//   }, []);

//   return (
//     <section ref={sectionRef} className="parallax">
//       <img ref={imgRef} src={image} alt={text} className="parallax-img" />
//       <div ref={textRef} className="parallax-text">
//         <h2>{text}</h2>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "../utils/gsapSetup";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ParallaxSection({ image, text }) {
  const sectionRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();                    // kills all animations in context
      ScrollTrigger.refresh();         // re-measures page after cleanup
    };
  }, []);

  return (
    <section ref={sectionRef} className="parallax">
      <img ref={imgRef} src={image} alt={text} className="parallax-img" />
      {text && (
        <div ref={textRef} className="parallax-text">
          <h2>{text}</h2>
        </div>
      )}
    </section>
  );
}