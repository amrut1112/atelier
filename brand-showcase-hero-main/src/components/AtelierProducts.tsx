import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import glideImg from "@/assets/SLIDING DOOR 1.jpg";
import flexImg from "@/assets/folding door hero.jpg";
import vertexImg from "@/assets/L SHAPED 2.jpg";
import frameImg from "@/assets/FIXED PARITION 3.jpg";
import ghostImg from "@/assets/ghost door (2).jpg";
import axisImg from "@/assets/openable door.jpg";
import lumeImg from "@/assets/led mirror.jpg";
import wardrobeImg from "@/assets/WARDROPE 1.jpg";
import synchroImg from "@/assets/SYNCHRO 1.jpg";

const products = [
  { key: "glide",    slug: "sliding-door",    name: "Atelier Glide",    label: "Sliding Door System",              description: "A seamless sliding system designed for modern living. Engineered for precision and elegance, it allows maximum light flow while maintaining structural strength — perfect for contemporary homes and offices.", image: glideImg },
  { key: "flex",     slug: "folding-door",    name: "Atelier Flex",     label: "Folding Door System",              description: "Atelier Flex redefines flexibility in space design. With its intelligent folding mechanism, it effortlessly opens up entire sections, creating a fluid connection between spaces.", image: flexImg },
  { key: "vertex",   slug: "l-shape-sliding", name: "Atelier Vertex",   label: "L-Shape Corner Sliding System",    description: "Designed for architectural freedom, Atelier Vertex eliminates boundaries at corners. This L-shaped sliding system offers uninterrupted views and a bold spatial experience.", image: vertexImg },
  { key: "frame",    slug: "fixed-partition", name: "Atelier Frame",    label: "Fixed Partition System",           description: "Clean, structured, and timeless — Atelier Frame is crafted to define spaces without closing them off. It delivers a perfect balance of openness and separation with a refined, architectural finish.", image: frameImg },
  { key: "wardrobe", slug: "wardrobe",        name: "Atelier Wardrobe", label: "Concealed Wardrobe System",        description: "Minimalism at its finest. Atelier Wardrobe blends seamlessly into the architecture of your space with concealed framing and a flush, handle-less finish that integrates effortlessly into the wall.", image: wardrobeImg },
  { key: "lume",     slug: "led-mirror",      name: "Atelier Lume",     label: "LED Mirror System",                description: "Atelier Lume blends illumination with design. Featuring integrated LED technology, it enhances both functionality and ambiance, delivering a soft, balanced glow that elevates modern interiors.", image: lumeImg },
  { key: "axis",     slug: "openable-door",   name: "Atelier Axis",     label: "Openable Door System",             description: "Precision-built for everyday performance, Atelier Axis offers a perfect balance of strength, smooth operation, and clean design. Engineered hinges ensure durability with a sleek architectural presence.", image: axisImg },
  { key: "ghost",    slug: "ghost-door",      name: "Atelier Ghost",    label: "Invisible Concealed Door System",  description: "Atelier Ghost is designed to disappear into the space. With concealed frames and a flush finish, it creates seamless wall integration — ideal for ultra-modern interiors where simplicity defines luxury.", image: ghostImg },
  { key: "synchro",  slug: "synchro",         name: "Atelier Synchro",  label: "Synchronized Sliding System",      description: "Two panels. One motion. Atelier Synchro is an engineered synchronized sliding system where dual panels move in perfect unison from a single touch — designed for wide openings that demand symmetry.", image: synchroImg },
];

/* ── Scroll reveal ── */
const Reveal = ({ children, from = "bottom", delay = 0 }: { children: React.ReactNode; from?: "left" | "right" | "bottom"; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
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

/* ── Corner accent mark (like the red square in the reference) ── */
const CornerMark = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -10, left: -10 },
    tr: { top: -10, right: -10 },
    bl: { bottom: -10, left: -10 },
    br: { bottom: -10, right: -10 },
  };
  return (
    <div className="absolute z-10 pointer-events-none" style={{ ...pos[position], width: 32, height: 32 }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" fill="#879E82" />
        <rect x="6" y="6" width="20" height="20" fill="#f5f3ef" />
      </svg>
    </div>
  );
};

const AtelierProducts = () => (
  <section id="products" className="py-24" style={{ background: "#f5f3ef" }}>
    <div className="container mx-auto px-6 md:px-16">

      {/* Section header */}
      <div className="mb-20">
        <p className="text-xs tracking-[0.35em] uppercase text-[#879E82] mb-3 font-body">Atelier Systems</p>
        <h2 className="font-display font-light text-[#1a1a1a] leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.04em" }}>
          Door &amp; Partition Systems
        </h2>
        <div className="w-12 h-px bg-[#879E82] mt-4" />
      </div>

      {/* Alternating rows */}
      <div className="space-y-28">
        {products.map((product, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={product.key}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
            >
              {/* Text side */}
              <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                <Reveal from={isEven ? "left" : "right"}>
                  <p className="text-xs tracking-[0.3em] uppercase text-[#879E82] mb-3 font-body">
                    {product.label}
                  </p>
                  <h3
                    className="font-display font-light text-[#1a1a1a] mb-6 leading-none"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "0.04em" }}
                  >
                    {product.name.replace("Atelier ", "")}
                  </h3>
                  <p className="text-[#6b6560] font-body font-light leading-relaxed mb-8 max-w-md" style={{ fontSize: "0.95rem" }}>
                    {product.description}
                  </p>
                  <Link
                    to={`/products/${product.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center gap-3 border border-[#1a1a1a] text-[#1a1a1a] px-7 py-2.5 text-xs tracking-[0.25em] uppercase font-body hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 group"
                  >
                    Read More
                    {/* Corner tick like reference */}
                    <span className="w-3 h-3 border-r border-b border-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" style={{ display: "inline-block" }} />
                  </Link>
                </Reveal>
              </div>

              {/* Image side */}
              <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <Reveal from={isEven ? "right" : "left"} delay={100}>
                  <div className="relative">
                    {/* Corner accent marks */}
                    <CornerMark position={isEven ? "tr" : "tl"} />
                    <CornerMark position={isEven ? "bl" : "br"} />

                    <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={product.image}
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
  </section>
);

export default AtelierProducts;
