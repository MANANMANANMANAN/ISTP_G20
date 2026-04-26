import { useEffect, useRef } from "react";
import gsap from "../utils/gsapSetup";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function VideoHero() {
  const containerRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    let tl; // keep reference to kill later

    const onLoaded = () => {
      video.play().catch(() => { });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
        },
      });

      // tl.to(video, { currentTime: video.duration });
      // tl.to(video, { clipPath: "inset(20% 20% 20% 20%)" }, 0);
      const isMobile = window.innerWidth < 768;
tl.to(video, {
  clipPath: isMobile
    ? "inset(10% 5% 10% 5%)"   // shallow inset on mobile — stays readable
    : "inset(20% 20% 20% 20%)", // original desktop shrink
}, 0);
    tl.to(video, { opacity: 0, duration: 1 });
    };

    video.addEventListener("loadedmetadata", onLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);

      // ✅ Kill the timeline and its ScrollTrigger before React removes the DOM
      if (tl) {
        tl.scrollTrigger?.kill();
        tl.kill();
      }
      // ✅ Also kill any ScrollTriggers attached to this container (safety net)
      ScrollTrigger.getAll()
        .filter(st => st.trigger === container)
        .forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="hero">
      <div className="hero-bg"
        style={{
          backgroundImage: "url('/images/quote_4.jpg')",  // ← your image here
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",  // dark so video stays the focus
        }}
      />
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hero-video"
      />
    </section>
  );
}