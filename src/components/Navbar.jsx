// import { useMenu } from "../context/MenuContext";

// export default function Navbar() {
//   const { open, setOpen } = useMenu();

//   return (
//     <div className="navbar">
//       <button onClick={() => setOpen(!open)}>
//         {open ? "Close" : "Menu"}
//       </button>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import { useMenu } from "../context/MenuContext";

export default function Navbar() {
  const { open, setOpen } = useMenu();
  const navRef = useRef();

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 60) {
          navRef.current.classList.add("navbar--scrolled");
        } else {
          navRef.current.classList.remove("navbar--scrolled");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${open ? "navbar--open" : ""}`}>
      {/* Left: project name */}
      <div className="navbar__brand">
        <span className="navbar__brand-main">ISTP</span>
        <span className="navbar__brand-sub">G20</span>
      </div>

      {/* Center: decorative tag line */}
      <div className="navbar__tagline">
        Monasteries · Culture · Heritage
      </div>

      {/* Right: hamburger */}
      <button
        className="navbar__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="navbar__toggle-label">{open ? "Close" : "Menu"}</span>
        <div className="navbar__hamburger">
          <span className={`bar bar1 ${open ? "open" : ""}`} />
          <span className={`bar bar2 ${open ? "open" : ""}`} />
          <span className={`bar bar3 ${open ? "open" : ""}`} />
        </div>
      </button>
    </nav>
  );
}