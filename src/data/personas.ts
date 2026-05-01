export const PERSONAS = [
  {
    id: "strategist",
    role_text_bg: "STRATEGIST",
    title: "Brand Strategist",
    subtitle: "I design how brands think and grow.",
    image: "/images/hero_me_new_strategist.png",
    accent: "#dc2626",
    scale: "scale-125 md:scale-[1.35] origin-bottom",
  },
  {
    id: "creative",
    role_text_bg: "CREATIVE",
    title: "Visual Storyteller",
    subtitle: "I turn ideas into content that converts.",
    image: "/images/hero_me_3.png",
    accent: "#dc2626",
    scale: "scale-100 origin-bottom",
  },
  {
    id: "systems",
    role_text_bg: "SYSTEMS",
    title: "AI Systems Builder",
    subtitle: "I automate and scale what works.",
    image: "/images/hero_me_2.png",
    accent: "#dc2626",
    scale: "scale-100 origin-bottom",
  },
];

export const STORIES = {
  strategist: {
    tagline: "The Strategy",
    headline: "I don't just design logos.",
    headlineHighlight: "I engineer brand perception.",
    p1: "Most businesses blend in. They look like their competitors, sound like their competitors, and fight for scraps on price.",
    p2: "I solve this by building scalable brand frameworks. My goal is to position you as an authority, create deep psychological resonance with your audience, and give you a visual identity that commands premium pricing.",
    stats: [
      { value: "10+", label: "Brands Launched" },
      { value: "3x", label: "Authority Growth" },
      { value: "4+", label: "Years Strategy" },
    ]
  },
  creative: {
    tagline: "The Execution",
    headline: "I don't just post content.",
    headlineHighlight: "I craft visual narratives.",
    p1: "In an attention economy, boring is a business risk. If your visuals don't capture attention in 3 seconds, your message is completely lost.",
    p2: "I solve this by designing high-conversion content pipelines. From dynamic video edits to compelling graphic design, I create media that stops the scroll, holds attention, and drives the audience to take action.",
    stats: [
      { value: "100+", label: "Assets Created" },
      { value: "80%", label: "Engagement Lift" },
      { value: "2M+", label: "Impressions" },
    ]
  },
  systems: {
    tagline: "The Infrastructure",
    headline: "I don't just manage socials.",
    headlineHighlight: "I build integrated systems.",
    p1: "Most business people don't understand how much time and money they are bleeding to human errors and repetitive, mundane tasks.",
    p2: "I solve this by building digital infrastructure that uses AI as a multiplier. My goal is to plug those leaks, drive absolute efficiency, and ensure scalable growth that automatically connects every touchpoint of your business.",
    stats: [
      { value: "60%", label: "Sales Efficiency" },
      { value: "70%", label: "Audience Scale" },
      { value: "5+", label: "Years Engineering" },
    ]
  }
};
