"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIALS = [
  { Icon: InstagramIcon, href: "https://instagram.com/nimo", label: "Instagram" },
  { Icon: LinkedInIcon, href: "https://linkedin.com/in/izevizua-osas", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:losas294@gmail.com", label: "Email" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-36 px-6 md:px-8 overflow-hidden" style={{ background: "#000000" }}>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
        {/* Left Column */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: "#dc2626" }}>
            The End Game
          </span>
          <div className="accent-line mt-4 mb-6" />
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[0.92] tracking-tighter text-white">
            I Automate{" "}
            <span className="block" style={{ color: "#dc2626" }}>Growth.</span>
          </h2>
          <p className="text-lg text-gray-500 mt-8 max-w-md font-sans leading-relaxed">
            Stop bleeding time and revenue on disconnected workflows and repetitive tasks. Through my agency, I integrate deep brand strategy, high-conversion content, and AI automation into a single, scalable digital infrastructure.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4 mt-12">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-4 rounded-full transition-all duration-300 group"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#dc2626";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#dc2626";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <Icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          <p className="mt-12 font-mono text-xs uppercase tracking-[0.15em] text-gray-400">
            Lagos, Nigeria — High-Leverage Strategic Partner
          </p>
        </motion.div>

        {/* Right Column — Form */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div
            className="rounded-[2rem] p-8 md:p-12 flex flex-col justify-center gap-8 h-full min-h-[360px]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Ready to scale?
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed text-lg">
                I do not take one-off audits. All client projects, system builds, and strategic consultations are handled exclusively through my agency.
              </p>
            </div>
            
            <a
              href="https://ndsagency.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-10 px-8 py-5 rounded-full inline-flex items-center justify-center gap-3 text-white font-bold text-lg transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#dc2626] outline-none"
              style={{
                background: "#dc2626",
                boxShadow: "0 4px 20px rgba(220,38,38,0.3)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 30px rgba(220,38,38,0.45)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(220,38,38,0.3)"; }}
            >
              Partner With My Agency
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
