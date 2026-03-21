import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "@/assets/folding door.jpg";
import p2 from "@/assets/sliding door.jpg";
import p3 from "@/assets/wardrobe.jpg";
import p4 from "@/assets/fix partition.jpg";
import p6 from "@/assets/ghost door.jpg";
import p7 from "@/assets/led mirror.jpg";
import p8 from "@/assets/synchro.jpg";

const items = [
  { image: p1, name: "Folding Door", tag: "New Arrival" },
  { image: p2, name: "Sliding Door", tag: "New Arrival" },
  { image: p3, name: "Atelier Wardrobe", tag: "New Arrival" },
  { image: p4, name: "Fixed Partition", tag: "New Arrival" },
  { image: p6, name: "Ghost Door", tag: "New Arrival" },
  { image: p7, name: "LED Mirror", tag: "New Arrival" },
  { image: p8, name: "Synchro", tag: "New Arrival" },
];

const CollectionGrid = () => {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p - 1 + items.length) % items.length);
  const next = () => setActive((p) => (p + 1) % items.length);

  const getVisible = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((active + i + items.length) % items.length);
    }
    return indices;
  };

  return (
    <section id="collection" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          Our <span className="font-bold">Collection</span>
        </h2>

        <div className="relative flex items-center justify-center gap-4 h-80">
          {getVisible().map((idx, pos) => {
            const isCenter = pos === 2;
            const dist = Math.abs(pos - 2);
            return (
              <div
                key={idx}
                onClick={() => {
                  setActive(idx);
                  if (items[idx].name === "Sliding Door") {
                    const target = document.getElementById("products");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
                className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-500 flex-shrink-0
                  ${isCenter ? "w-72 h-72 shadow-2xl z-10 scale-110" : dist === 1 ? "w-48 h-56 opacity-70 z-0" : "w-36 h-44 opacity-40 z-0"}`}
              >
                <img src={items[idx].image} alt={items[idx].name} className="w-full h-full object-cover" />
                {isCenter && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />}
                <div className={`absolute bottom-3 left-3 ${isCenter ? "opacity-100" : "opacity-0"} transition-opacity`}>
                  <span className="text-primary text-xs font-semibold block">{items[idx].tag}</span>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold font-display text-lg">{items[idx].name}</h3>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-border"}`}
              aria-label={`Go to ${items[i].name}`} />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <h3 className="text-2xl font-bold font-display text-center mb-2">
            Watch Us on <span className="text-primary">Instagram</span>
          </h3>
          <div className="w-10 h-0.5 bg-primary mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            {["https://www.instagram.com/reel/DUnR81-CHbA/embed", "https://www.instagram.com/reel/DVs3WrHCKPB/embed"].map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                <iframe src={url} className="w-full border-0" height="500" allowFullScreen
                  title={`Atelier Instagram Reel ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <a href="https://www.instagram.com/amrut_doorsystem_/" target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:underline font-semibold">
            Follow us on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
