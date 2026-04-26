import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "../utils/gsapSetup";
import { useMenu } from "../context/MenuContext";

export default function OverlayMenu() {
  const { open, setOpen } = useMenu();
  const overlayRef = useRef();

  useEffect(() => {
    if (open) {
      gsap.to(overlayRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
      });
    }
  }, [open]);

  return (
    <div ref={overlayRef} className="overlay">
      <Link onClick={() => setOpen(false)} to="/">Home</Link>
      <Link onClick={() => setOpen(false)} to="/culture">Culture</Link>
      <Link onClick={() => setOpen(false)} to="/monasteries">Monasteries</Link>
      <Link onClick={() => setOpen(false)} to="/temples">Temples</Link>
      <Link onClick={() => setOpen(false)} to="/translation">Translation</Link>
    </div>
  );
}