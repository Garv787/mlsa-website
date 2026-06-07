import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { getEventBySlug } from "../data/events";
import { easeSmooth } from "../utils/animations";
import PixelRushPoster from "../assets/PixelRushPoster.jpeg";
import TreasureHuntPoster from "../assets/TreasureHuntPoster.jpeg";
import FreshersFiestaPoster from "../assets/FreshersFiestaPoster.jpeg";
import KaunBanegaCodepatiPoster from "../assets/KaunBanegaCodepatiPoster.jpeg";
import HackOWeenPoster from "../assets/HackOWeenPoster.jpeg";
import SitcomSyntaxPoster from "../assets/SitcomSyntaxPoster.jpeg";

const heroImages = {
  "pixel-rush": PixelRushPoster,
  "treasure-hunt": TreasureHuntPoster,
  "kbc-kon-banega-codepati": KaunBanegaCodepatiPoster,
  "freshers-fiesta": FreshersFiestaPoster,
  "hack-o-ween": HackOWeenPoster,
  "sitcom-syntax": SitcomSyntaxPoster,
};

/* Scroll-reveal wrapper */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, ease: easeSmooth, delay }}
    >
      {children}
    </motion.div>
  );
};

const EventDetail = () => {
  const { slug }  = useParams();
  const navigate  = useNavigate();
  const event     = getEventBySlug(slug);
  const heroRef   = useRef(null);

  /*
   * Parallax — driven by Lenis scroll (which stays running on this page).
   * We pass the heroRef as the target so framer tracks its position.
   */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });
  const imgScale   = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.15]);
  const textY      = useTransform(scrollYProgress, [0, 1], [0, 55]);

  /* Back button — set flag so ScrollToTop in App.jsx scrolls to #page-events */
  const goBack = () => {
    window.__scrollToEvents = true;
    navigate("/");
  };

  if (!event) {
    return (
      <div style={{ minHeight: "100vh", background: "#0d0d12", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#fff", marginBottom: "1rem" }}>Event not found.</p>
          <button onClick={goBack} style={{ color: "#818cf8", background: "none", border: "none", cursor: "pointer", fontSize: "1rem" }}>
            ← Back to Events
          </button>
        </div>
      </div>
    );
  }

  const heroImage = heroImages[slug] || PixelRushPoster;

  return (
    <div style={{ background: "#0d0d12", minHeight: "100vh", overflowX: "hidden", color: "#fff" }}>

      {/* ── HERO ── */}
      <div ref={heroRef} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

        {/* Parallax poster */}
        <motion.div style={{
          position: "absolute",
          inset: "-8%",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          scale: imgScale,
          opacity: imgOpacity,
          zIndex: 1,
        }} />

        {/* Bottom dark gradient */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(to top, #0d0d12 0%, rgba(13,13,18,0.55) 45%, rgba(13,13,18,0.1) 100%)",
        }} />

        {/* Top navbar fade */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "120px", zIndex: 2,
          background: "linear-gradient(to bottom, rgba(13,13,18,0.65) 0%, transparent 100%)",
        }} />

        {/* Hero text — bottom-left */}
        <motion.div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3,
          padding: "0 clamp(1.5rem,5vw,3.5rem) clamp(2.5rem,6vh,4rem)",
          y: textY,
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: easeSmooth }}
            style={{
              fontSize: "clamp(2.8rem,7vw,6rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#fff",
              margin: 0,
            }}
          >
            {event.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.95rem,1.5vw,1.15rem)",
              marginTop: "0.6rem",
              fontWeight: 400,
            }}
          >
            {event.date}
          </motion.p>
        </motion.div>

        {/* Scroll indicator — centred */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            position: "absolute",
            bottom: "clamp(2.5rem,6vh,4rem)",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span style={{
            fontSize: "0.62rem", fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "26px", height: "40px", borderRadius: "13px",
              border: "1.5px solid rgba(255,255,255,0.3)",
              display: "flex", justifyContent: "center", paddingTop: "6px",
            }}
          >
            <div style={{ width: "4px", height: "8px", borderRadius: "2px", background: "rgba(255,255,255,0.55)" }} />
          </motion.div>
        </motion.div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "clamp(2.5rem,6vh,4rem) clamp(1.5rem,5vw,3.5rem) clamp(4rem,10vh,7rem)",
      }}>

        {/* Back to Events */}
        <Reveal>
          <button
            onClick={goBack}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.35rem",
              background: "none", border: "none",
              color: "rgba(255,255,255,0.55)", fontSize: "0.88rem",
              fontWeight: 500, cursor: "pointer", padding: 0,
              marginBottom: "2.5rem", transition: "color 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </button>
        </Reveal>

        {/* About */}
        <Reveal delay={0.05}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "1.25rem", marginTop: 0 }}>
            About this Event
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {event.fullDescription.split(/\n\n+/).map((para, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <p style={{
                color: "rgba(255,255,255,0.75)", lineHeight: 1.8,
                fontSize: "clamp(0.9rem,1.3vw,1rem)", margin: 0,
              }}>
                {para}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Organizers */}
        <Reveal>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "0.9rem", marginTop: 0 }}>
            Organizers
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2.5rem" }}>
            {event.organizers.map((org) => (
              <span key={org} style={{
                display: "inline-block", padding: "0.55rem 1.1rem",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px", color: "rgba(255,255,255,0.88)", fontSize: "0.9rem", fontWeight: 500,
              }}>
                {org}
              </span>
            ))}
            {event.collaborators?.map((col) => (
              <span key={col} style={{
                display: "inline-block", padding: "0.55rem 1.1rem",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 500,
              }}>
                {col}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Hashtags */}
        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
            {event.hashtags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)" }}
                style={{
                  display: "inline-block", padding: "0.3rem 0.85rem",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px", color: "rgba(255,255,255,0.5)",
                  fontSize: "0.82rem", fontWeight: 500, cursor: "default",
                }}
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </Reveal>

        {/* Gallery — single row, strong hover zoom */}
        <Reveal>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "1.1rem", marginTop: 0 }}>
            Gallery
          </h2>

          {event.galleryImages.length > 0 ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${event.galleryImages.length}, 1fr)`,
              gap: "0.75rem",
              overflow: "visible",
            }}>
              {event.galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, zIndex: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    borderRadius: "14px",
                    overflow: "hidden",
                    background: "#111",
                    border: "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                    transformOrigin:
                      i === 0 ? "left center"
                      : i === event.galleryImages.length - 1 ? "right center"
                      : "center center",
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
              {[1,2,3,4].map((i) => (
                <div key={i} style={{
                  aspectRatio: "4/3", borderRadius: "14px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px dashed rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>Coming soon</span>
                </div>
              ))}
            </div>
          )}
        </Reveal>

        {/* Bottom back button */}
        <div style={{ marginTop: "3.5rem" }}>
          <button
            onClick={goBack}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "none", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px", padding: "0.6rem 1.4rem",
              color: "rgba(255,255,255,0.55)", fontSize: "0.82rem",
              fontWeight: 500, letterSpacing: "0.04em",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
          >
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventDetail;
