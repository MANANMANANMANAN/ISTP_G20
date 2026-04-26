import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import OverlayMenu from "./components/OverlayMenu";
import { MenuProvider } from "./context/MenuContext";
import { useEffect } from "react";
import initSmoothScroll from "./utils/smoothScroll";
import { setupScroll } from "./utils/gsapSetup";
import gsap from "./utils/gsapSetup";
function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();
        function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync with GSAP
    lenis.on("scroll", () => {
      gsap.ticker.tick();
    });
    // setupScroll(lenis);
  }, []);
  return (
    <MenuProvider>
      <BrowserRouter>
        <Navbar />
        <OverlayMenu />
        <AppRoutes />
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;