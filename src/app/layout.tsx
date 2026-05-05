import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nimo | Brand Strategist, Visual Storyteller & AI Systems Builder",
  description:
    "Izevizua Osas (Nimo) — I help businesses build their brand, create content that converts, and set up AI automation so they grow on autopilot. Based in Lagos, Nigeria.",
  keywords: [
    "Brand Strategist Nigeria",
    "Social Media Manager Lagos",
    "AI Automation",
    "Content Creator Nigeria",
    "Visual Storyteller",
    "Digital Marketing",
    "Nimo",
    "Izevizua Osas",
  ],
  authors: [{ name: "Izevizua Osas", url: "https://instagram.com/nimo" }],
  openGraph: {
    title: "Nimo | Brand Strategist & AI Systems Builder",
    description:
      "I help businesses build their brand, create content that converts, and automate their growth with AI. Based in Lagos, Nigeria.",
    url: "https://nimo.vercel.app",
    siteName: "Nimo Portfolio",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimo | Brand Strategist & AI Systems Builder",
    description:
      "I help businesses build their brand, create content that converts, and automate their growth with AI.",
    creator: "@nimo",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-zinc-900 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
