import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Reveal = ({ children, from = "bottom", delay = 0 }: { children: React.ReactNode; from?: "left" | "right" | "bottom"; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  const translate = from === "left" ? "translateX(-40px)" : from === "right" ? "translateX(40px)" : "translateY(30px)";
  return (
    <div ref={ref} style={{ transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`, opacity: vis ? 1 : 0, transform: vis ? "translate(0)" : translate }}>
      {children}
    </div>
  );
};

const CornerMark = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -10, left: -10 },
    tr: { top: -10, right: -10 },
    bl: { bottom: -10, left: -10 },
    br: { bottom: -10, right: -10 },
  };
  return (
    <div className="absolute z-10 pointer-events-none" style={{ ...pos[position], width: 28, height: 28 }}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" fill="#879E82" />
        <rect x="5" y="5" width="18" height="18" fill="#f5f3ef" />
      </svg>
    </div>
  );
};

const ProductsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: "#f5f3ef" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative flex items-end overflow-hidden" style={{ minHeight: "40vh", background: "#0e0e0e" }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }} preserveAspectRatio="xMidYMid slice">
          <path d="M-100 600 L-100 200 Q300 -100 700 200 L700 600" stroke="#879E82" strokeWidth="1.5" fill="none" />
          <path d="M500 600 L500 150 Q900 -150 1300 150 L1300 600" stroke="#879E82" strokeWidth="1.5" fill="none" />
        </svg>
        <div className="relative z-10 container mx-auto px-8 md:px-16 pb-16 pt-36">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#879E82]" />
            <span className="text-[#879E82] text-xs tracking-[0.35em] uppercase font-body">Atelier Systems</span>
          </div>
          <h1 className="font-display font-light text-white leading-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "0.04em" }}>
            Door &amp; Partition Systems
          </h1>
        </div>
      </div>

      {/* Alternating product rows */}
      <div className="container mx-auto px-6 md:px-16 py-24">
        <div className="space-y-28">
          {products.map((product, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={product.key} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <Reveal from={isEven ? "left" : "right"}>
                    <p className="text-xs tracking-[0.3em] uppercase text-[#879E82] mb-3 font-body">
                      {product.label}
                    </p>
                    <h2
                      className="font-display font-light text-[#1a1a1a] mb-2 leading-none"
                      style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "0.04em" }}
                    >
                      {product.name.replace("Atelier ", "")}
                    </h2>
                    <p className="font-display font-light mb-6" style={{ color: product.color, fontSize: "1rem", letterSpacing: "0.08em" }}>
                      {product.tagline}
                    </p>
                    <p className="text-[#6b6560] font-body font-light leading-relaxed mb-8 max-w-md" style={{ fontSize: "0.95rem" }}>
                      {product.description}
                    </p>
                    <Link
                      to={`/products/${product.slug}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="inline-flex items-center gap-3 border border-[#1a1a1a] text-[#1a1a1a] px-7 py-2.5 text-xs tracking-[0.25em] uppercase font-body hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 group"
                    >
                      Read More
                      <span className="w-3 h-3 border-r border-b border-current inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                    </Link>
                  </Reveal>
                </div>

                {/* Image */}
                <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <Reveal from={isEven ? "right" : "left"} delay={100}>
                    <div className="relative">
                      <CornerMark position={isEven ? "tr" : "tl"} />
                      <CornerMark position={isEven ? "bl" : "br"} />
                      <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                        <img
                          src={product.heroImage}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
