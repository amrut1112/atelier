import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImg1 from "@/assets/about-1.jpg";
import aboutImg2 from "@/assets/about-2.jpg";
import fixImg from "@/assets/fix partition (2).jpg";

/* ── Fade-in on scroll ── */
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)" }}>
      {children}
    </div>
  );
};

/* ── Animated door divider ── */
const DoorDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOpen(true); }, { threshold: 0.5 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative flex items-center justify-center my-16 overflow-hidden" style={{ height: 2 }}>
      <div className="absolute left-0 h-px bg-gradient-to-r from-transparent via-[#879E82] to-[#879E82]" style={{ width: "48%", transition: "transform 1.2s cubic-bezier(0.76,0,0.24,1) 0.2s", transform: open ? "translateX(0)" : "translateX(100%)", transformOrigin: "right" }} />
      <div className="relative z-10 mx-3 flex-shrink-0">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="1" y="1" width="26" height="26" stroke="#879E82" strokeWidth="1.5" />
          <path d="M7 27 L7 17 Q7 8 14 8 Q21 8 21 17 L21 27" stroke="#879E82" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="absolute right-0 h-px bg-gradient-to-l from-transparent via-[#879E82] to-[#879E82]" style={{ width: "48%", transition: "transform 1.2s cubic-bezier(0.76,0,0.24,1) 0.2s", transform: open ? "translateX(0)" : "translateX(-100%)", transformOrigin: "left" }} />
    </div>
  );
};

/* ── Ghost door animation ── */
const GhostDoorAnim = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOpen(true); }, { threshold: 0.4 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative w-full" style={{ height: 340, background: "#0e0e0e", borderRadius: 4, overflow: "hidden" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#1a1a1a 0%,#0e0e0e 100%)" }} />
      <div className="absolute bottom-12 left-0 right-0 h-px bg-white/10" />
      {/* Static frame */}
      <div className="absolute" style={{ left: "50%", top: "8%", transform: "translateX(-50%)", width: 150, height: 260 }}>
        <svg width="150" height="260" viewBox="0 0 150 260" fill="none">
          <rect x="2" y="2" width="146" height="256" stroke="#333" strokeWidth="4" />
          <path d="M22 258 L22 140 Q22 32 75 32 Q128 32 128 140 L128 258" stroke="#444" strokeWidth="2.5" fill="none" />
          <path d="M44 258 L44 160 Q44 76 75 76 Q106 76 106 160 L106 258" stroke="#3a3a3a" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      {/* Sliding panel */}
      <div className="absolute" style={{ left: "50%", top: "8%", width: 150, height: 260, transition: "transform 1.4s cubic-bezier(0.76,0,0.24,1) 0.3s", transform: open ? "translateX(calc(-50% + 140px))" : "translateX(-50%)" }}>
        <svg width="150" height="260" viewBox="0 0 150 260" fill="none">
          <rect x="1" y="1" width="148" height="258" fill="rgba(200,210,205,0.06)" stroke="#2a2a2a" strokeWidth="3" />
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={8 + i * 7} y1="4" x2={8 + i * 7} y2="256" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />
          ))}
          <path d="M20 258 L20 138 Q20 30 75 30 Q130 30 130 138 L130 258" stroke="#879E82" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
          <rect x="6" y="115" width="4" height="55" rx="2" fill="#C9B898" fillOpacity="0.6" />
        </svg>
      </div>
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-[#879E82] text-[10px] tracking-[0.3em] uppercase font-body">Ghost Door System</span>
      </div>
    </div>
  );
};

const principles = [
  { icon: "◻", title: "Precision", text: "Every millimetre matters. Our systems are engineered to tolerances that ensure smooth, silent, lasting performance." },
  { icon: "✦", title: "Minimalism", text: "We remove everything unnecessary. What remains is pure function expressed through clean, considered form." },
  { icon: "◎", title: "Purpose", text: "Nothing is decorative for its own sake. Every design decision serves the way you live, move, and feel in your space." },
];

const values = [
  { title: "Honesty", text: "We say what we mean and deliver what we promise. No hidden costs, no shortcuts." },
  { title: "Craftsmanship", text: "Every product leaves our facility only when it meets our standard — not the market's." },
  { title: "Partnership", text: "We treat every project as a collaboration. Your success is our measure of quality." },
  { title: "Longevity", text: "We design for decades, not seasons. Materials and systems chosen to outlast trends." },
];

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <div className="relative flex items-end" style={{ minHeight: "70vh", background: "#0e0e0e", overflow: "hidden" }}>
        <img src={fixImg} alt="Atelier" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.3 }} />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }} preserveAspectRatio="xMidYMid slice">
          <path d="M-100 900 L-100 400 Q300 -100 700 400 L700 900" stroke="#879E82" strokeWidth="2" fill="none" />
          <path d="M500 900 L500 350 Q900 -150 1300 350 L1300 900" stroke="#879E82" strokeWidth="2" fill="none" />
        </svg>
        <div className="relative z-10 container mx-auto px-8 md:px-16 pb-20 pt-40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#879E82]" />
            <span className="text-[#879E82] text-xs tracking-[0.35em] uppercase font-body">Our Story</span>
          </div>
          <h1 className="font-display font-light text-white leading-tight" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "0.04em" }}>
            Atelier —<br /><span style={{ color: "#C9B898" }}>Where Craft<br />Meets Meaning</span>
          </h1>
        </div>
      </div>

      {/* ── STORY ── */}
      <div className="py-20" style={{ background: "#f5f3ef" }}>
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-[#6b6560] font-body font-light leading-relaxed mb-5" style={{ fontSize: "1.05rem" }}>
                  Atelier was created with a simple belief — a home is not just built, it is felt. Especially when it's your first space, every decision carries weight, and every detail becomes part of your story.
                </p>
                <p className="text-[#6b6560] font-body font-light leading-relaxed mb-5">
                  We saw a gap between ordinary functional products and truly thoughtful design — between what is simply installed and what actually belongs. That's where Atelier begins.
                </p>
                <p className="text-[#6b6560] font-body font-light leading-relaxed mb-5">
                  We design and engineer modern door and partition systems that integrate seamlessly into your space — not as additions, but as extensions of how you live.
                </p>
                <p className="text-[#6b6560] font-body font-light leading-relaxed">
                  Because true design is not loud — it is quiet, intentional, and effortless. Atelier is for those who care about the details, for those who want their space to reflect who they are without compromise.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={100}>
                <img src={aboutImg1} alt="Atelier" className="w-full object-cover rounded-sm shadow-lg" style={{ height: 260 }} />
              </Reveal>
              <Reveal delay={200}>
                <img src={aboutImg2} alt="Craftsmanship" className="w-full object-cover rounded-sm shadow-lg mt-8" style={{ height: 260 }} />
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ── THREE PRINCIPLES ── */}
      <div className="py-20" style={{ background: "#0e0e0e" }}>
        <div className="container mx-auto px-8 md:px-16">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-[#879E82] mb-3 font-body text-center">How We Work</p>
            <h2 className="font-display font-light text-white text-center mb-14" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "0.06em" }}>
              Three Principles. Every Project.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "#222" }}>
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="p-10 h-full" style={{ background: "#0e0e0e" }}>
                  <span className="text-[#879E82] text-2xl mb-6 block">{p.icon}</span>
                  <h3 className="font-display font-light text-white mb-4" style={{ fontSize: "1.5rem", letterSpacing: "0.08em" }}>{p.title}</h3>
                  <p className="text-white/40 font-body text-sm leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── GHOST DOOR + VALUES ── */}
      <div className="py-20" style={{ background: "#f5f3ef" }}>
        <div className="container mx-auto px-8 md:px-16">
          <DoorDivider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GhostDoorAnim />
            <div>
              <Reveal>
                <p className="text-xs tracking-[0.35em] uppercase text-[#879E82] mb-3 font-body">What We Stand For</p>
                <h2 className="font-display font-light text-[#1a1a1a] mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "0.06em" }}>
                  Values that guide every decision.
                </h2>
              </Reveal>
              <div className="space-y-8">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 100}>
                    <div className="flex gap-5 items-start">
                      <div className="w-px self-stretch bg-[#879E82]/40 flex-shrink-0 mt-1" style={{ minHeight: 40 }} />
                      <div>
                        <h4 className="font-display font-light text-[#1a1a1a] mb-1" style={{ fontSize: "1.2rem", letterSpacing: "0.06em" }}>{v.title}</h4>
                        <p className="text-[#6b6560] font-body text-sm leading-relaxed">{v.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <DoorDivider />
        </div>
      </div>

      {/* ── VISION & MISSION ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ background: "#0e0e0e" }}>
        <div className="relative p-14 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
          <svg className="absolute right-0 bottom-0 pointer-events-none" width="200" height="200" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.06 }}>
            <path d="M20 200 L20 110 Q20 20 100 20 Q180 20 180 110 L180 200" stroke="#879E82" strokeWidth="3" fill="none" />
          </svg>
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-[#879E82] mb-4 font-body">Vision</p>
            <h3 className="font-display font-light text-white mb-6 leading-tight" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", letterSpacing: "0.06em" }}>A New Standard</h3>
            <p className="text-white/50 font-body font-light leading-relaxed text-sm">
              To set a new standard in the industry by making quality design and efficient systems accessible across projects of every scale.
            </p>
          </Reveal>
        </div>
        <div className="relative p-14 overflow-hidden">
          <svg className="absolute right-0 bottom-0 pointer-events-none" width="200" height="200" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.06 }}>
            <path d="M20 200 L20 110 Q20 20 100 20 Q180 20 180 110 L180 200" stroke="#C9B898" strokeWidth="3" fill="none" />
          </svg>
          <Reveal delay={150}>
            <p className="text-xs tracking-[0.35em] uppercase text-[#C9B898] mb-4 font-body">Mission</p>
            <h3 className="font-display font-light text-white mb-6 leading-tight" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", letterSpacing: "0.06em" }}>Built to Support You</h3>
            <p className="text-white/50 font-body font-light leading-relaxed text-sm">
              To support our partners with dependable products, consistent quality, and seamless service — helping them build better, faster, and smarter.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="py-20 text-center" style={{ background: "#f5f3ef" }}>
        <Reveal>
          <p className="text-xs tracking-[0.35em] uppercase text-[#879E82] mb-4 font-body">Ready to Begin?</p>
          <h3 className="font-display font-light text-[#1a1a1a] mb-8" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "0.06em" }}>
            Let's design your space together.
          </h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="/#contact-us" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
              Book a Consultation
            </a>
            <button onClick={() => { navigate("/"); window.scrollTo(0, 0); }} className="inline-block border border-[#879E82] text-[#879E82] px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-[#879E82] hover:text-white transition-all duration-300">
              Back to Home
            </button>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
