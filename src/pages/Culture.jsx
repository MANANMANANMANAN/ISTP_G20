import { useEffect, useRef } from "react";
import ParallaxSection from "../components/ParallaxSection";
import gsap from "../utils/gsapSetup";

export default function Culture() {
  const titleRef = useRef();
  const numRef = useRef();

  // useEffect(() => {
  //   // Subtle title drift as page scrolls
  //   const ctx = gsap.context(() => {
  //     gsap.to(titleRef.current, {
  //       y: 60,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: document.body,
  //         start: "top top",
  //         end: "+=600",
  //         scrub: true,
  //       },
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);
  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(titleRef.current, {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=600",
        scrub: true,
      },
    });
  }, titleRef); // ← scope to titleRef, not document.body

  return () => ctx.revert(); // ← this now correctly cleans up
}, []);

  return (
    <div className="culture-page">
      {/* ── Hero title — sits above first card, scrolls away ── */}
      <div className="culture-hero">
        {/* <p className="culture-hero-eyebrow">ISTP · G20</p> */}
        <h1 ref={titleRef} className="culture-hero-title">Culture</h1>
        <p className="culture-hero-desc">
          Living traditions, sacred rituals, and the quiet rhythms<br />
          of Himalayan life — preserved across centuries.
        </p>
      </div>

      {/* ── Card 01 ── */}
      <div className="culture-card-wrap">
        <div className="culture-card-meta">
          <span className="culture-card-num">01</span>
          <div className="culture-card-info">
            <h2 className="culture-card-heading">Traditions of Himalayan Life</h2>
            <p className="culture-card-body">
              From harvest festivals to monastic ceremonies, the highland
              communities of Himachal Pradesh carry forward a way of life
              largely untouched by modernity.
            </p>
          </div>
        </div>
        <div className="culture-card-parallax">
          <ParallaxSection image="/images/culture_01.jpg" text="" />
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="culture-divider">
        <span />
        <p>Spiritual Practices</p>
        <span />
      </div>

      {/* ── Card 02 ── */}
      <div className="culture-card-wrap culture-card-wrap--alt">
        <div className="culture-card-meta">
          <span className="culture-card-num">02</span>
          <div className="culture-card-info">
            <h2 className="culture-card-heading">Spiritual Practices &amp; Daily Rituals</h2>
            <p className="culture-card-body">
              Prayer flags, butter lamps, and the resonant call of horns —
              spirituality is not an event here, but the texture of every day.
            </p>
          </div>
        </div>
        <div className="culture-card-parallax">
          <ParallaxSection image="/images/culture_01.jpg" text="" />
        </div>
      </div>

      <div style={{ height: "12vh", background: "#0a0a0a" }} />
    </div>
  );
}