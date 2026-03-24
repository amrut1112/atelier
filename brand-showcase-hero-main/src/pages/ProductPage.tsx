import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductBySlug, products } from "@/data/products";

/* ── Ghost door page-entry animation ── */
const GhostDoorReveal = ({ color }: { color: string }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 80);
    return () => clearTimeout(t);
  }, []);
  const ease = "cubic-bezier(0.76,0,0.24,1)";
  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden" style={{ opacity: open ? 0 : 1, transition: "opacity 0.3s ease 1.2s" }}>
      {/* Left panel */}
      <div className="absolute inset-y-0 left-0 w-1/2" style={{ transition: `transform 1.1s ${ease} 0.1s`, transform: open ? "translateX(-100%)" : "translateX(0)" }}>
        <div className="w-full h-full relative" style={{ background: "#0e0e0e" }}>
          <svg width="100%" height="100%" viewBox="0 0 340 900" preserveAspectRatio="none" style={{ position: "absolute", inset: 0 }}>
            <rect x="4" y="4" width="332" height="892" fill="none" stroke={color} strokeWidth="6" strokeOpacity="0.3" />
            <line x1="4" y1="220" x2="336" y2="220" stroke={color} strokeWidth="3" strokeOpacity="0.2" />
            <path d="M30 892 L30 380 Q30 240 170 240 Q310 240 310 380 L310 892" stroke={color} strokeWidth="3" fill="none" strokeOpacity="0.25" />
            <path d="M80 892 L80 440 Q80 320 170 320 Q260 320 260 440 L260 892" stroke={color} strokeWidth="2" fill="none" strokeOpacity="0.2" />
            {/* Handle */}
            <rect x="320" y="420" width="5" height="80" rx="2.5" fill={color} fillOpacity="0.4" />
          </svg>
        </div>
      </div>
      {/* Right panel */}
      <div className="absolute inset-y-0 right-0 w-1/2" style={{ transition: `transform 1.1s ${ease} 0.1s`, transform: open ? "translateX(100%)" : "translateX(0)" }}>
        <div className="w-full h-full relative" style={{ background: "#0e0e0e" }}>
          <svg width="100%" height="100%" viewBox="0 0 340 900" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, transform: "scaleX(-1)" }}>
            <rect x="4" y="4" width="332" height="892" fill="none" stroke={color} strokeWidth="6" strokeOpacity="0.3" />
            <line x1="4" y1="220" x2="336" y2="220" stroke={color} strokeWidth="3" strokeOpacity="0.2" />
            <path d="M30 892 L30 380 Q30 240 170 240 Q310 240 310 380 L310 892" stroke={color} strokeWidth="3" fill="none" strokeOpacity="0.25" />
            <path d="M80 892 L80 440 Q80 320 170 320 Q260 320 260 440 L260 892" stroke={color} strokeWidth="2" fill="none" strokeOpacity="0.2" />
            <rect x="320" y="420" width="5" height="80" rx="2.5" fill={color} fillOpacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

/* ── Scroll reveal ── */
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)" }}>
      {children}
    </div>
  );
};

/* ── Animated door divider ── */
const DoorLine = ({ color }: { color: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOpen(true); }, { threshold: 0.5 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative flex items-center justify-center my-14 overflow-hidden" style={{ height: 2 }}>
      <div className="absolute left-0 h-px" style={{ width: "48%", background: `linear-gradient(to right, transparent, ${color})`, transition: "transform 1.1s cubic-bezier(0.76,0,0.24,1) 0.1s", transform: open ? "translateX(0)" : "translateX(100%)", transformOrigin: "right" }} />
      <div className="relative z-10 mx-3 flex-shrink-0">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="1" width="20" height="20" stroke={color} strokeWidth="1.2" />
          <path d="M5 21 L5 13 Q5 5 11 5 Q17 5 17 13 L17 21" stroke={color} strokeWidth="1.2" fill="none" />
        </svg>
      </div>
      <div className="absolute right-0 h-px" style={{ width: "48%", background: `linear-gradient(to left, transparent, ${color})`, transition: "transform 1.1s cubic-bezier(0.76,0,0.24,1) 0.1s", transform: open ? "translateX(0)" : "translateX(-100%)", transformOrigin: "left" }} />
    </div>
  );
};

/* ── Image gallery ── */
const Gallery = ({ images, accent }: { images: string[]; accent: string }) => {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p - 1 + images.length) % images.length);
  const next = () => setActive((p) => (p + 1) % images.length);

  return (
    <div className="relative">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/3", background: "#0e0e0e" }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`View ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border border-white/30 text-white hover:border-white transition-colors" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border border-white/30 text-white hover:border-white transition-colors" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
        {/* Counter */}
        <div className="absolute bottom-3 right-4 text-white/60 text-xs tracking-widest font-body">
          {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex-1 overflow-hidden rounded-sm transition-all duration-300"
              style={{ aspectRatio: "1", border: `2px solid ${i === active ? accent : "transparent"}`, opacity: i === active ? 1 : 0.5 }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Animated spec row ── */
const SpecRow = ({ label, value, delay, accent }: { label: string; value: string; delay: number; accent: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [barW, setBarW] = useState(0);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); setTimeout(() => setBarW(100), delay + 200); } }, { threshold: 0.3 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="py-4 border-b border-[#e8e4de]" style={{ transition: `opacity 0.6s ease ${delay}ms`, opacity: vis ? 1 : 0 }}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs tracking-[0.2em] uppercase text-[#888] font-body">{label}</span>
        <span className="text-sm font-body text-[#1a1a1a]">{value}</span>
      </div>
      <div className="h-px bg-[#e8e4de] overflow-hidden">
        <div className="h-full transition-all duration-1000 ease-out" style={{ width: `${barW}%`, background: accent }} />
      </div>
    </div>
  );
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = getProductBySlug(slug || "");

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Product not found.</p>
          <button onClick={() => navigate("/")} className="text-primary underline">Back to Home</button>
        </div>
      </div>
    );
  }

  const accent = product.color;
  const currentIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = products[(currentIndex - 1 + products.length) % products.length];
  const nextProduct = products[(currentIndex + 1) % products.length];

  return (
    <div className="min-h-screen" style={{ background: "#f5f3ef" }}>
      <GhostDoorReveal color={product.color} />
      <Navbar />

      {/* ── HERO ── */}
      <div className="relative flex items-end overflow-hidden" style={{ minHeight: "65vh", background: "#0e0e0e" }}>
        <img src={product.heroImage} alt={product.name} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.35 }} />
        {/* Arch geometry bg */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.07 }} preserveAspectRatio="xMidYMid slice">
          <path d={`M-80 900 L-80 380 Q250 -80 580 380 L580 900`} stroke={accent} strokeWidth="1.5" fill="none" />
          <path d={`M400 900 L400 320 Q730 -140 1060 320 L1060 900`} stroke={accent} strokeWidth="1.5" fill="none" />
        </svg>
        {/* Animated door frame overlay */}
        <div className="absolute right-16 bottom-0 top-0 hidden lg:flex items-center pointer-events-none" style={{ opacity: 0.12 }}>
          <svg width="180" height="500" viewBox="0 0 180 500" fill="none">
            <rect x="3" y="3" width="174" height="494" stroke={accent} strokeWidth="4" />
            <line x1="3" y1="120" x2="177" y2="120" strokeWidth="3" stroke={accent} />
            <line x1="120" y1="3" x2="120" y2="120" strokeWidth="3" stroke={accent} />
            <path d="M20 497 L20 280 Q20 135 90 135 Q160 135 160 280 L160 497" stroke={accent} strokeWidth="3" fill="none" />
            <path d="M50 497 L50 310 Q50 200 90 200 Q130 200 130 310 L130 497" stroke={accent} strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-16 pb-16 pt-36">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase font-body mb-8 transition-colors group">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs tracking-[0.35em] uppercase font-body" style={{ color: accent }}>{product.label}</span>
          </div>
          <h1 className="font-display font-light text-white leading-tight" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "0.04em" }}>
            {product.name}
          </h1>
          <p className="font-display font-light mt-3" style={{ color: accent, fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "0.08em" }}>
            {product.tagline}
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Gallery */}
          <Reveal>
            <Gallery images={product.images} accent={accent} />
          </Reveal>

          {/* Info */}
          <div>
            <Reveal delay={100}>
              <p className="text-[#6b6560] font-body font-light leading-relaxed mb-8" style={{ fontSize: "1.05rem" }}>
                {product.description}
              </p>
            </Reveal>

            {/* Details list */}
            <Reveal delay={150}>
              <p className="text-xs tracking-[0.3em] uppercase font-body mb-4" style={{ color: accent }}>Features</p>
              <ul className="space-y-3 mb-10">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4a4540] font-body">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* CTA */}
            <Reveal delay={200}>
              <button
                onClick={() => {
                  window.location.href = "/#contact-us";
                }}
                className="inline-flex items-center gap-3 px-8 py-3 text-xs tracking-[0.25em] uppercase font-body font-semibold text-white transition-all duration-300 hover:opacity-85"
                style={{ background: "#1a1a1a", borderRadius: 2 }}
              >
                Request a Quote
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </Reveal>
          </div>
        </div>

        {/* ── SPECS ── */}
        <DoorLine color={accent} />
        <Reveal>
          <p className="text-xs tracking-[0.35em] uppercase font-body mb-2" style={{ color: accent }}>Specifications</p>
          <h2 className="font-display font-light text-[#1a1a1a] mb-8" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "0.06em" }}>
            Technical Details
          </h2>
        </Reveal>
        <div className="max-w-xl">
          {product.specs.map((s, i) => (
            <SpecRow key={s.label} label={s.label} value={s.value} delay={i * 80} accent={accent} />
          ))}
        </div>

        <DoorLine color={accent} />
      </div>

      {/* ── OTHER PRODUCTS ── */}
      <div className="py-16" style={{ background: "#0e0e0e" }}>
        <div className="container mx-auto px-8 md:px-16">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-[#879E82] mb-2 font-body">Explore More</p>
            <h3 className="font-display font-light text-white mb-10" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "0.06em" }}>
              Other Systems
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.filter((p) => p.slug !== slug).slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to={`/products/${p.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group block relative overflow-hidden rounded-sm"
                  style={{ aspectRatio: "3/4" }}
                >
                  <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-[10px] tracking-[0.25em] uppercase font-body mb-1" style={{ color: p.color }}>{p.label}</p>
                    <p className="text-white font-display font-light text-sm" style={{ letterSpacing: "0.06em" }}>{p.name}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── PREV / NEXT ── */}
      <div className="grid grid-cols-2 border-t border-[#e8e4de]">
        <Link
          to={`/products/${prevProduct.slug}`}
          onClick={() => window.scrollTo(0, 0)}
          className="group flex items-center gap-4 p-8 hover:bg-[#eceae6] transition-colors border-r border-[#e8e4de]"
        >
          <ChevronLeft className="w-5 h-5 text-[#888] transition-transform group-hover:-translate-x-1" />
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#888] font-body mb-1">Previous</p>
            <p className="font-display font-light text-[#1a1a1a]" style={{ fontSize: "1.1rem", letterSpacing: "0.06em" }}>{prevProduct.name}</p>
          </div>
        </Link>
        <Link
          to={`/products/${nextProduct.slug}`}
          onClick={() => window.scrollTo(0, 0)}
          className="group flex items-center justify-end gap-4 p-8 hover:bg-[#eceae6] transition-colors"
        >
          <div className="text-right">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#888] font-body mb-1">Next</p>
            <p className="font-display font-light text-[#1a1a1a]" style={{ fontSize: "1.1rem", letterSpacing: "0.06em" }}>{nextProduct.name}</p>
          </div>
          <ChevronRight className="w-5 h-5 text-[#888] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
