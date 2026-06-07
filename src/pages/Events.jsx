import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { eventsData } from "../data/events";
import { easeConfident } from "../utils/animations";
import PixelRushPoster from "../assets/PixelRushPoster.jpeg";
import TreasureHuntPoster from "../assets/TreasureHuntPoster.jpeg";
import FreshersFiestaPoster from "../assets/FreshersFiestaPoster.jpeg";
import KaunBanegaCodepatiPoster from "../assets/KaunBanegaCodepatiPoster.jpeg";
import HackOWeenPoster from "../assets/HackOWeenPoster.jpeg";
import SitcomSyntaxPoster from "../assets/SitcomSyntaxPoster.jpeg";

const cardImages = [
  PixelRushPoster,
  TreasureHuntPoster,
  FreshersFiestaPoster,
  KaunBanegaCodepatiPoster,
  HackOWeenPoster,
  SitcomSyntaxPoster,
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.5,
      ease: easeConfident,
    },
  }),
};

const Events = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      id="page-events"
      style={{ background: "transparent", minHeight: "100vh", position: "relative" }}
      className="flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Ambient glow blobs — matching the site's other sections */}
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: 0,
          opacity: 0.13,
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
          top: "5%",
          left: "8%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(130px)",
          zIndex: 0,
          opacity: 0.1,
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          bottom: "5%",
          right: "5%",
          pointerEvents: "none",
        }}
      />

      {/* Left — Editorial title space */}
      <div
        className="relative flex-[0_0_100%] lg:flex-[0_0_55%] h-[35vh] lg:h-screen flex flex-col justify-end"
        style={{ background: "transparent", position: "relative", zIndex: 1 }}
      >
        <div className="absolute inset-0 grain-overlay-inline" />
        <motion.div
          className="relative z-10 px-6 sm:px-8 lg:px-12 pb-10 lg:pb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeConfident }}
        >
          <p
            className="text-white/40 uppercase tracking-[0.25em] text-xs sm:text-sm mb-4 font-medium"
          >
            What we've been up to
          </p>
          <h1
            className="text-[clamp(3.5rem,11vw,8rem)] font-bold text-white uppercase leading-none tracking-[0.03em]"
            style={{ textShadow: "0 2px 60px rgba(99,102,241,0.15)" }}
          >
            Events
          </h1>
          <div
            style={{
              width: "clamp(48px,8vw,80px)",
              height: "2px",
              background: "linear-gradient(90deg, rgba(99,102,241,0.7), transparent)",
              marginTop: "1.5rem",
            }}
          />
        </motion.div>
      </div>

      {/* Right — Scrollable cards panel */}
      <div
        className="relative flex-[0_0_100%] lg:flex-[0_0_45%] h-[65vh] lg:h-screen flex flex-col"
        style={{
          background: "transparent",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          zIndex: 1,
        }}
      >
        <div
          ref={scrollRef}
          data-lenis-prevent
          className="flex-1 overflow-y-auto scrollbar-hide overscroll-contain"
        >
          {/* Top breathing room */}
          <div style={{ height: "clamp(24px, 4vh, 48px)" }} />

          <div style={{ padding: "0 1.25rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {eventsData.map((event, index) => {
              const imageUrl = cardImages[index % cardImages.length];
              const isHovered = hoveredIndex === index;

              return (
                <Link
                  key={event.slug}
                  to={`/events/${event.slug}`}
                  style={{ display: "block", padding: "4px" }}
                >
                  <motion.article
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    style={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.015,
                      transition: { duration: 0.3, ease: easeConfident },
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Card image */}
                    <div style={{ position: "relative", aspectRatio: "16/9" }}>
                      <img
                        src={imageUrl}
                        alt={event.title}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />

                      {/* Gradient overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                        }}
                      />

                      {/* Vignette */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          boxShadow: "inset 0 0 60px rgba(0,0,0,0.25)",
                        }}
                      />

                      {/* Top gloss */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "33%",
                          pointerEvents: "none",
                          opacity: 0.25,
                          background: "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, transparent 100%)",
                        }}
                      />

                      {/* Text content */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          padding: "1rem 1.25rem",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.3, marginBottom: "0.2rem" }}>
                          {event.title}
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
                          {event.date}
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {event.shortDescription}
                        </p>
                      </div>

                      {/* Index number */}
                      <span
                        style={{
                          position: "absolute",
                          bottom: "0.75rem",
                          right: "1rem",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: isHovered ? "#fff" : "rgba(255,255,255,0.7)",
                          transition: "color 0.2s",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Hover border highlight */}
                      {isHovered && (
                        <motion.div
                          layoutId="card-highlight"
                          style={{
                            position: "absolute",
                            inset: 0,
                            border: "1.5px solid rgba(99,102,241,0.45)",
                            borderRadius: "16px",
                            pointerEvents: "none",
                          }}
                          initial={false}
                          transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        />
                      )}
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </div>

          {/* Bottom breathing room */}
          <div style={{ height: "2rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Events;
