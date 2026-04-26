import { useEffect, useRef } from "react";
import gsap from "../utils/gsapSetup";

export default function IntroBridge() {
  const panelRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      panelRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: panelRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="intro-wrapper">
      {/* Sticky image that stays fixed as you scroll */}
      <div className="intro-sticky-image">
        <img src="/images/monastery.jpg" alt="Monastery" />
      </div>

      {/* Tall spacer so the image is visible before the panel arrives */}
      <div className="intro-spacer" />

      {/* This panel slides up over the sticky image */}
      <div ref={panelRef} className="intro-overlap-panel">
        <h2>Entering the World of Monasteries</h2>
        <p>A journey through silence, tradition, and living heritage.</p>
      </div>
    </div>
  );
}