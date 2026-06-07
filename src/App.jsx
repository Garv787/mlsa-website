import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Globe from "./components/Globe";
import Home from "./pages/Home";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MsaSection from "./pages/MsaSection";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";


gsap.registerPlugin(ScrollTrigger);

// Helper to handle scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Always ensure Lenis is running when we're on the main page
    if (pathname === "/") {
      if (window.lenis) window.lenis.start();
    }

    if (window.__scrollToEvents) {
      window.__scrollToEvents = false;
      // Retry until #page-events is mounted
      const attempt = (tries = 0) => {
        const el = document.getElementById("page-events");
        if (el) {
          if (window.lenis) {
            window.lenis.start();
            setTimeout(() => window.lenis.scrollTo(el, { offset: 0, duration: 1.2 }), 80);
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else if (tries < 15) {
          setTimeout(() => attempt(tries + 1), 80);
        }
      };
      setTimeout(() => attempt(), 150);
    } else {
      if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

const MainPage = () => {
  return (
    <div className="main-sections">
      <Home />
      <MsaSection />
      <AboutUs />
      <Events />
      <Team />
      <ContactUs />
    </div>

  );
};

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: prefersReducedMotion ? 0.18 : 0.12, // Keep scrolling responsive while respecting user preference
      wheelMultiplier: 1.0, // Standard scroll speed
      smoothWheel: !prefersReducedMotion,
      syncTouch: false, // Don't force smooth scroll on mobile touch
    });

    lenis.on("scroll", ScrollTrigger.update);
    window.lenis = lenis;

    const lenisTickerFn = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(lenisTickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenisTickerFn);
      delete window.lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Globe />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events/:slug" element={<EventDetail />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
