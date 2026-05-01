import IdentityHero from "@/components/IdentityHero";
import AboutMe from "@/components/AboutMe";
import SystemsBuilt from "@/components/SystemsBuilt";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import { PersonaProvider } from "@/context/PersonaContext";

export default function Home() {
  return (
    <PersonaProvider>
      <main className="min-h-screen">
        <IdentityHero />
        <AboutMe />
        <SystemsBuilt />
        <Capabilities />
        <Contact />

        {/* Footer */}
        <footer className="py-10 px-8" style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-400 text-sm font-sans">
              &copy; {new Date().getFullYear()} Nimo — Systems Architect. All rights reserved.
            </p>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Built with intention
            </p>
          </div>
        </footer>
      </main>
    </PersonaProvider>
  );
}
