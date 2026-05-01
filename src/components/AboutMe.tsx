"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { PERSONAS, STORIES } from "@/data/personas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AboutMe() {
  const { index } = usePersona();
  const persona = PERSONAS[index];
  const story = STORIES[persona.id as keyof typeof STORIES];
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".story-animate",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, { dependencies: [index], scope: container });

  return (
    <section id="about" className="py-28 md:py-36 px-8 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40 mix-blend-multiply transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${persona.accent}08 0%, transparent 60%)`,
          transform: "translate(20%, -20%)"
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10" ref={container}>
        
        {/* Left Column - Heading */}
        <div className="w-full lg:w-5/12">
          <div className="sticky top-32">
            <span className="story-animate text-xs font-mono uppercase tracking-[0.2em] text-gray-500">{story.tagline}</span>
            <div className="story-animate accent-line mt-4 mb-5" />
            <h2 className="story-animate text-4xl md:text-6xl font-display font-black leading-[1.1] tracking-tight text-black">
              {story.headline}
              <br />
              <span className="text-gray-400">{story.headlineHighlight}</span>
            </h2>
          </div>
        </div>

        {/* Right Column - Content & Stats */}
        <div className="w-full lg:w-7/12 flex flex-col gap-10">
          <div className="story-animate prose prose-lg text-gray-600 font-sans leading-relaxed">
            <p className="text-xl text-black font-medium mb-6">
              {story.p1}
            </p>
            <p>
              {story.p2}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 mt-6 border-t border-gray-100">
            {story.stats.map((stat, i) => (
              <div 
                key={i}
                className="story-animate flex flex-col gap-2"
              >
                <span className="text-4xl md:text-5xl font-display font-black transition-colors duration-700" style={{ color: persona.accent }}>
                  {stat.value}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
