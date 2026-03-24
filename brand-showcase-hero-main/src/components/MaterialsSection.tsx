import { useEffect, useRef, useState } from "react";

const materials = [
  {
    title: "Aluminium",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="1" y="1" width="30" height="30" stroke="#879E82" strokeWidth="1.5" />
        <line x1="8" y1="16" x2="24" y2="16" stroke="#879E82" strokeWidth="1.5" />
        <line x1="16" y1="8" x2="16" y2="24" stroke="#879E82" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Engineered for strength and precision. Aluminium offers a sleek, modern finish with exceptional durability — perfect for creating clean lines and long-lasting performance in contemporary spaces.",
  },
  {
    title: "Glass",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="1" y="1" width="30" height="30" stroke="#879E82" strokeWidth="1.5" fill="none" />
        <rect x="6" y="6" width="20" height="20" stroke="#879E82" strokeWidth="0.8" fill="rgba(135,158,130,0.08)" />
        <line x1="6" y1="6" x2="26" y2="26" stroke="#879E82" strokeWidth="0.6" strokeOpacity="0.4" />
      </svg>
    ),
    desc: "Designed to bring light and openness into every space. Glass enhances visibility, adds elegance, and creates a seamless, modern aesthetic with its refined, polished finish.",
  },
  {
    title: "Hardware & Fittings",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#879E82" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="4" stroke="#879E82" strokeWidth="1.2" fill="none" />
        <line x1="16" y1="1" x2="16" y2="6" stroke="#879E82" strokeWidth="1.5" />
        <line x1="16" y1="26" x2="16" y2="31" stroke="#879E82" strokeWidth="1.5" />
        <line x1="1" y1="16" x2="6" y2="16" stroke="#879E82" strokeWidth="1.5" />
        <line x1="26" y1="16" x2="31" y2="16" stroke="#879E82" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Crafted for smooth performance and reliability. Our premium hardware ensures effortless movement, durability, and a flawless experience in every detail.",
  },
];

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)" }}>
      {children}
    </div>
  );
};

const MaterialsSection = () => (
  <section className="py-24" style={{ background: "#0e0e0e" }}>
    <div className="container mx-auto px-6 md:px-16">

      <Reveal>
        <p className="text-xs tracking-[0.35em] uppercase text-[#879E82] mb-3 font-body">What We Use</p>
        <h2 className="font-display font-light text-white mb-16 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}>
          Premium <span style={{ color: "#C9B898" }}>Materials</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "#222" }}>
        {materials.map((m, i) => (
          <Reveal key={m.title} delay={i * 100}>
            <div className="p-10 h-full group hover:bg-[#141414] transition-colors duration-300" style={{ background: "#0e0e0e" }}>
              <div className="mb-6">{m.icon}</div>
              <h3 className="font-display font-light text-white mb-4" style={{ fontSize: "1.4rem", letterSpacing: "0.08em" }}>
                {m.title}
              </h3>
              <p className="text-white/40 font-body text-sm leading-relaxed">{m.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

    </div>
  </section>
);

export default MaterialsSection;
