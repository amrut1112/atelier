import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutImg1 from "@/assets/about-1.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-us" className="py-0 bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

        {/* Image */}
        <div className="relative overflow-hidden order-2 lg:order-1" style={{ minHeight: 320 }}>
          <img src={aboutImg1} alt="Atelier" className="w-full h-full object-cover" style={{ minHeight: 320 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, hsl(var(--background)))" }} />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.08 }} preserveAspectRatio="xMidYMid slice">
            <path d="M-60 600 L-60 280 Q160 -60 380 280 L380 600" stroke="#879E82" strokeWidth="2" fill="none" />
            <path d="M60 600 L60 320 Q240 20 420 320 L420 600" stroke="#879E82" strokeWidth="1.2" fill="none" />
          </svg>
        </div>

        {/* Content */}
        <div
          ref={ref}
          className="flex flex-col justify-center px-10 md:px-16 py-16 order-1 lg:order-2"
          style={{ background: "hsl(var(--background))" }}
        >
          <div style={{ transition: "opacity 0.9s ease, transform 0.9s ease", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#879E82]" />
              <span className="text-[#879E82] text-xs tracking-[0.35em] uppercase font-body">About Us</span>
            </div>

            <h2 className="font-display font-light text-foreground leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.04em" }}>
              Atelier —<br />
              <span className="text-primary">Where Craft Meets Meaning</span>
            </h2>

            <p className="text-muted-foreground font-body font-light leading-relaxed mb-4" style={{ fontSize: "0.95rem" }}>
              Atelier was created with a simple belief — a home is not just built, it is felt. We design and engineer modern door and partition systems that integrate seamlessly into your space, not as additions, but as extensions of how you live.
            </p>

            <p className="text-muted-foreground font-body font-light leading-relaxed mb-8" style={{ fontSize: "0.95rem" }}>
              Every system we create is guided by three principles:{" "}
              <span className="text-foreground">precision</span>,{" "}
              <span className="text-foreground">minimalism</span>, and{" "}
              <span className="text-foreground">purpose</span>.
            </p>

            {/* Mini stats */}
            <div className="flex gap-8 mb-10 border-t border-b border-border py-5">
              {[["700+", "Projects"], ["12+", "Years"], ["98%", "Satisfaction"]].map(([val, label]) => (
                <div key={label}>
                  <p className="font-display font-light text-foreground" style={{ fontSize: "1.6rem", letterSpacing: "0.04em" }}>{val}</p>
                  <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-body mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => { navigate("/about"); window.scrollTo(0, 0); }}
              className="self-start flex items-center gap-3 border border-foreground/30 text-foreground px-8 py-3 text-xs tracking-[0.25em] uppercase font-body hover:border-[#879E82] hover:text-[#879E82] transition-all duration-300 group"
            >
              Know More
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 5h14M10 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
