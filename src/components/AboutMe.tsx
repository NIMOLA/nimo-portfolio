"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { PERSONAS, STORIES } from "@/data/personas";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin } from "lucide-react";

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
    <section id="about" className="bg-white overflow-hidden relative">

      {/* ── BIO BLOCK ── */}
      <div className="border-b border-gray-100 py-20 px-8">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Name block */}
          <div className="flex-shrink-0">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">About Me</p>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight text-black leading-none">
              Izevizua<br />
              <span style={{ color: "#dc2626" }}>Osas.</span>
            </h2>
            <p className="text-base font-mono text-gray-500 mt-4 uppercase tracking-widest">Known as Nimo</p>
            <div className="flex items-center gap-2 mt-4 text-gray-400">
              <MapPin className="w-4 h-4" style={{ color: "#dc2626" }} />
              <span className="text-sm font-sans">Lagos, Nigeria</span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch bg-gray-100" />

          {/* Bio text */}
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl font-sans text-black font-medium leading-relaxed mb-6">
              I&apos;m a Brand Strategist, Visual Storyteller, and AI Systems Builder with 5+ years of experience helping brands grow — from first impression to automated operation.
            </p>
            <p className="text-base md:text-lg font-sans text-gray-500 leading-relaxed">
              Whether I&apos;m designing a visual identity, producing content that stops the scroll, or building AI workflows that save you hours every week — every move I make is strategic and built to scale. I operate through my agency, <a href="https://ndsagency.com.ng" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: "#dc2626" }}>NDS Agency</a>, where we turn small brands into serious businesses.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── DYNAMIC STORY BLOCK ── */}
      <div className="py-28 md:py-36 px-8 relative">
        {/* Decorative background element */}
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40 mix-blend-multiply transition-colors duration-700"
          style={{
            background: `radial-gradient(circle, ${persona.accent}08 0%, transparent 60%)`,
            transform: "translate(20%, -20%)"
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10" ref={container}>
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-32">
              <span className="story-animate text-xs font-mono uppercase tracking-[0.2em] text-gray-500">{story.tagline}</span>
              <div className="story-animate accent-line mt-4 mb-5" />
              <h3 className="story-animate text-4xl md:text-6xl font-display font-black leading-[1.1] tracking-tight text-black">
                {story.headline}
                <br />
                <span className="text-gray-400">{story.headlineHighlight}</span>
              </h3>
            </div>
          </div>

          {/* Right Column */}
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
      </div>
    </section>
  );
}

