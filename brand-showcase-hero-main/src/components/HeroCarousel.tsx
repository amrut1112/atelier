import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg1 from "@/assets/hero-wardrobe.jpg";
import heroImg2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: heroImg1,
    tag: "India Ka #1 Door System",
    title: "Crafted for Modern Living",
    description:
      "Your wardrobe isn't just storage — it's a reflection of your style. Atelier blends innovative functionality with sophisticated design to create spaces that are uniquely yours.",
  },
  {
    image: heroImg2,
    tag: "Where Craft Meets Engineering",
    title: "Uniqueness in Every Design",
    description:
      "From sliding doors to walk-in wardrobes, we craft premium modular solutions for every home across India. Smart design. Lasting quality. Built around you.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 md:px-16 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#879E82]" />
                <span className="text-[#879E82] text-xs tracking-[0.3em] uppercase font-body">{slide.tag}</span>
                <div className="w-8 h-px bg-[#879E82]" />
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-[#C9B898]/80 text-base md:text-lg mb-10 font-body font-light max-w-xl leading-relaxed">
                {slide.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#collection"
                  className="inline-block border border-[#879E82] text-[#879E82] px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-[#879E82] hover:text-white transition-all duration-300">
                  Explore Collection
                </a>
                <a href="#contact-us"
                  className="inline-block border border-[#C9B898]/40 text-[#C9B898] px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:border-[#C9B898] transition-all duration-300">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:border-[#879E82] hover:text-[#879E82] transition-colors"
        aria-label="Previous">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={() => setCurrent((p) => (p + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:border-[#879E82] hover:text-[#879E82] transition-colors"
        aria-label="Next">
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-8 left-8 md:left-16 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${i === current ? "w-8 h-0.5 bg-[#879E82]" : "w-2 h-0.5 bg-white/40"}`}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
