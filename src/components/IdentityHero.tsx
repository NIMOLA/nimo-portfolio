"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePersona } from "@/context/PersonaContext";
import { PERSONAS } from "@/data/personas";

gsap.registerPlugin(useGSAP);

const GsapBgText = ({ persona }: { persona: any }) => {
  const el = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    gsap.fromTo(el.current, 
      { opacity: 0, y: 60, filter: "blur(12px)", scale: 0.95 },
      { opacity: 0.20, y: 0, filter: "blur(0px)", scale: 1, duration: 1.2, ease: "power3.out" }
    );
  }, { dependencies: [persona] });

  return (
    <span
      ref={el}
      aria-hidden="true"
      className="absolute text-[28vw] md:text-[18vw] font-display font-black tracking-[-0.06em] leading-none"
      style={{ color: persona.accent }}
    >
      {persona.role_text_bg}
    </span>
  );
};

const GsapTextContent = ({ persona }: { persona: any }) => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(".accent-line", 
      { scaleX: 0, opacity: 0 }, 
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
    gsap.fromTo(".text-animate",
      { y: 30, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.15, ease: "back.out(1.2)", delay: 0.1 }
    );
  }, { scope: container });

  return (
    <div ref={container} className="flex flex-col items-center text-center max-w-lg px-6">
      <div
        className="accent-line mb-5 h-1 w-12 rounded-full"
        style={{ background: `linear-gradient(90deg, ${persona.accent}, ${persona.accent}60)` }}
      />
      <h1 className="text-animate text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tight text-black">
        {persona.title}
      </h1>
      <p className="text-animate text-lg sm:text-xl md:text-3xl text-gray-500 font-sans mt-3">
        {persona.subtitle}
      </p>
    </div>
  );
};

export default function IdentityHero() {
  const { index, setIndex } = usePersona();
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const rotate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + PERSONAS.length) % PERSONAS.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => rotate(1), 5000);
    return () => clearInterval(interval);
  }, [rotate, isHovered]);

  const currentPersona = PERSONAS[index];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ background: "#ffffff" }}
    >
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220,38,38,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220,38,38,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gear Rim — large arc at the bottom */}
      <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[180vw] h-[180vw] rounded-full pointer-events-none z-0"
        style={{
          border: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "inset 0 0 120px rgba(0,0,0,0.02)",
        }}
      >
        <div className="absolute inset-[-30px] rounded-full" style={{ border: "1px solid rgba(0,0,0,0.03)" }} />
        <div className="absolute inset-[-60px] rounded-full" style={{ border: "1px solid rgba(0,0,0,0.015)" }} />
      </div>

      {/* Fixed UI: Name + Nav */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-8">
        <h2 className="text-2xl font-display font-black tracking-tighter select-none text-black">
          Nimo<span style={{ color: "#dc2626" }}>.</span>
        </h2>
        <nav className="hidden md:flex items-center gap-8">
          {["Systems Built", "Capabilities", "Build Together"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Layer 2: Role Text Background */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
        <GsapBgText key={currentPersona.id} persona={currentPersona} />
      </div>

      {/* Layer 3: Main Gear Content */}
      <div className="relative z-30 w-full flex flex-col items-center justify-end pb-36 md:pb-40" style={{ minHeight: "100vh" }}>
        <div className="relative w-full flex items-center justify-center overflow-visible">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPersona.id}
              custom={direction}
              initial={shouldReduceMotion ? { opacity: 0 } : {
                opacity: 0,
                rotate: direction > 0 ? 30 : -30,
                y: 80,
                scale: 0.88,
                transformOrigin: "center 250%",
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                y: 0,
                scale: 1,
                transformOrigin: "center 250%",
              }}
              exit={shouldReduceMotion ? { opacity: 0 } : {
                opacity: 0,
                rotate: direction > 0 ? -30 : 30,
                y: 80,
                scale: 0.88,
                transformOrigin: "center 250%",
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) rotate(1);
                if (info.offset.x > 50) rotate(-1);
              }}
              className="flex flex-col items-center cursor-grab active:cursor-grabbing w-full"
            >
              {/* Portrait — full-height, overflows above header */}
              <div 
                className="relative w-full h-[65vh] md:h-[90vh]"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              >
                <Image
                  src={currentPersona.image}
                  alt={currentPersona.title}
                  fill
                  className="object-contain object-bottom drop-shadow-2xl transition-all duration-700"
                  priority
                  sizes="100vw"
                />
              </div>

              {/* Text Content — sits directly below the fade */}
              <div className="w-full -mt-12 relative z-40 flex flex-col items-center text-center">
                <GsapTextContent persona={currentPersona} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Layer 4: Persistent Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-50 pointer-events-none pb-[env(safe-area-inset-bottom)]">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 px-8 md:px-12 pb-10">
          {/* CTAs */}
          <div className="flex flex-col md:flex-row items-center gap-4 pointer-events-auto w-full md:w-auto">
            <a href="#experience" className="premium-button-primary w-full md:w-auto justify-center flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900 outline-none">
              View Case Studies
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#contact" className="premium-button-secondary w-full md:w-auto justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900 outline-none">
              About Me
            </a>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 pointer-events-auto mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
            <nav className="flex items-center gap-3" aria-label="Identity rotation">
              <button
                onClick={() => rotate(-1)}
                aria-label="Previous persona"
                className="p-3 rounded-full border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900 outline-none"
              >
                <ArrowLeft className="w-5 h-5 text-stone-400 group-hover:text-stone-800 transition-colors" />
              </button>
              {/* Dot indicators */}
              <div className="flex items-center gap-2 mx-2">
                {PERSONAS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    aria-label={`Go to persona ${i + 1}`}
                    className="outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-full"
                  >
                    <div
                      className="rounded-full transition-all duration-500"
                      style={{
                        width: i === index ? 24 : 8,
                        height: 8,
                        background: i === index ? currentPersona.accent : "#d6d3d1",
                      }}
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={() => rotate(1)}
                aria-label="Next persona"
                className="p-3 rounded-full border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900 outline-none"
              >
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-800 transition-colors" />
              </button>
            </nav>

            <span className="text-stone-400 font-mono text-sm hidden md:block" aria-live="polite">
              <span className="text-stone-800 font-semibold">0{index + 1}</span> / 0{PERSONAS.length}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-stone-100 overflow-hidden" aria-hidden="true">
          <motion.div
            key={index}
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "-100%" : "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="w-full h-full"
            style={{ background: `linear-gradient(90deg, ${currentPersona.accent}, ${currentPersona.accent}80)` }}
          />
        </div>
      </div>
    </section>
  );
}
