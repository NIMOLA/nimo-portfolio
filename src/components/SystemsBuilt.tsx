"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SYSTEMS = [
  {
    category: "High-Ticket Real Estate",
    title: "Lead Acquisition & Onboarding System",
    role: "Architect @ Crabfint Real Estate",
    description: "Designed the bridge between digital brand strategy and customer onboarding. Optimized client communication workflows for co-ownership and rent-to-own products.",
    metric: "60%",
    metricLabel: "Sales Efficiency",
    accent: "#dc2626",
  },
  {
    category: "Sports & Entertainment",
    title: "Viral Growth Infrastructure",
    role: "Growth Lead @ Showtime Promotions",
    description: "Engineered an end-to-end social growth system for a premier football tournament. Scaled Instagram/TikTok followers by 70% in 30 days.",
    metric: "70%",
    metricLabel: "Audience Scale",
    accent: "#dc2626",
  },
  {
    category: "Retail & E-commerce",
    title: "Conversion-Optimized Content Engine",
    role: "Systems Designer @ PerfumesForLessNG",
    description: "Built a content pipeline that drove a 60% increase in sales. Developed cohesive branding systems to unify digital and print materials.",
    metric: "50%",
    metricLabel: "Visibility Boost",
    accent: "#dc2626",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function SystemsBuilt() {
  return (
    <section id="experience" className="py-28 md:py-36 px-8" style={{ background: "#f9fafb" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">Case History</span>
            <div className="accent-line mt-4 mb-5" />
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-black">
              Systems Built<span style={{ color: "#dc2626" }}>.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-md text-gray-600 font-sans text-lg leading-relaxed"
          >
            I don&apos;t just &ldquo;create content.&rdquo; I design integrated business systems that drive measurable growth.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SYSTEMS.map((system, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="card-lift rounded-[1.5rem] p-8 md:p-10 flex flex-col justify-between group cursor-pointer"
              style={{
                background: "white",
                border: "1px solid #e5e5e5",
              }}
            >
              <div>
                {/* Category badge */}
                <span
                  className="inline-block text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    background: `${system.accent}10`,
                    color: system.accent,
                    border: `1px solid ${system.accent}20`,
                  }}
                >
                  {system.category}
                </span>

                <h3 className="text-xl md:text-2xl font-display font-bold mt-6 leading-snug text-black">
                  {system.title}
                </h3>
                <p className="text-sm font-semibold mt-2" style={{ color: system.accent }}>
                  {system.role}
                </p>
                <p className="text-gray-600 mt-5 font-sans leading-relaxed text-[15px]">
                  {system.description}
                </p>
              </div>

              {/* Bottom: metric + arrow */}
              <div className="mt-8 pt-6 flex items-end justify-between" style={{ borderTop: "1px solid #f5f5f4" }}>
                <div>
                  <span className="text-3xl font-display font-black" style={{ color: system.accent }}>
                    {system.metric}
                  </span>
                  <span className="block text-xs font-mono text-gray-500 uppercase mt-1">{system.metricLabel}</span>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${system.accent}10`,
                    color: system.accent,
                  }}
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
