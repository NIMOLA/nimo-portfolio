"use client";

import React from "react";
import { motion } from "framer-motion";

const CAPABILITIES = [
  { name: "Marketing Strategy", icon: "◆" },
  { name: "AI & Automation", icon: "⚡" },
  { name: "Website Design", icon: "△" },
  { name: "Business Setup", icon: "◈" },
  { name: "Brand Identity", icon: "◎" },
  { name: "Workflow Setup", icon: "⬡" },
  { name: "Content Creation", icon: "◐" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-28 md:py-36 px-8 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-16 md:gap-24">
          {/* Left column — heading */}
          <motion.div
            className="md:w-1/3 md:sticky md:top-32"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">What I Do</span>
            <div className="accent-line mt-4 mb-5" />
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-black">
              Capabilities<span style={{ color: "#dc2626" }}>.</span>
            </h2>
            <p className="text-gray-600 font-sans text-lg mt-6 leading-relaxed">
              I help you build your brand from the ground up, create content that connects with people, and set up AI tools so your business runs smoothly on autopilot.
            </p>
          </motion.div>

          {/* Right column — tags */}
          <motion.div
            className="md:w-2/3 flex flex-wrap gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={i}
                variants={tagVariants}
                className="group cursor-default"
              >
                <div
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 group-hover:scale-[1.03]"
                  style={{
                    background: "#f9fafb",
                    border: "1px solid #e5e5e5",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "#dc262608";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#dc262630";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "#f9fafb";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e5e5";
                  }}
                >
                  <span className="text-lg" style={{ color: "#dc2626" }}>{cap.icon}</span>
                  <span className="text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                    {cap.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: "5+", label: "Years of Engineering" },
            { value: "10+", label: "Systems Deployed" },
            { value: "3", label: "Industries Served" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center py-8">
              <span className="text-5xl font-display font-black" style={{ color: "#dc2626" }}>
                {stat.value}
              </span>
              <span className="text-sm font-mono uppercase tracking-wider text-gray-500 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          className="mt-24 pt-16 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626] mt-1 text-xs">◆</span>
                  <p className="text-gray-800 font-medium">Grew Showtime Promotions’ TikTok by 2k+ likes in 1 month via viral content.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626] mt-1 text-xs">◆</span>
                  <p className="text-gray-800 font-medium">Increased PerfumesForLess Instagram sales by 60% with targeted reels.</p>
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-6">Education & Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626] mt-1 text-xs">◎</span>
                  <p className="text-gray-800 font-medium">HTML5 Certification — Solo Learn Coding Academy</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#dc2626] mt-1 text-xs">◎</span>
                  <p className="text-gray-800 font-medium">National Diploma (ND), Electrical-Electronics Engineering</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
