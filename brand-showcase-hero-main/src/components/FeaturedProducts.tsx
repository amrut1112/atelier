import foldingImg from "@/assets/folding door.jpg";
import slidingImg from "@/assets/sliding door.jpg";
import openableImg from "@/assets/openable door.jpg";
import ghostImg from "@/assets/ghost door.jpg";
import fixedImg from "@/assets/fix partition.jpg";

const products = [
  { image: foldingImg, name: "Folding Door" },
  { image: slidingImg, name: "Sliding Door" },
  { image: openableImg, name: "Openable Door" },
  { image: ghostImg, name: "Ghost Door" },
  { image: fixedImg, name: "Fixed Partition" },
];

const FeaturedProducts = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.name} className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-primary-foreground text-lg font-semibold font-display">
              {p.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Instagram Reel */}
      <div className="mt-16 flex flex-col items-center">
        <h3 className="text-2xl font-bold font-display text-center mb-6">
          Watch Us on <span className="text-primary">Instagram</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[
            "https://www.instagram.com/reel/DVwOnVKiMCX/embed",
            "https://www.instagram.com/reel/DViApqEy4xR/embed",
            "https://www.instagram.com/reel/DVS6fqtSbr3/embed",
          ].map((url, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={url}
                className="w-full border-0"
                height="500"
                allowFullScreen
                title={`Atelier Instagram Reel ${i + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/amrut_doorsystem_/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-primary hover:underline font-semibold"
        >
          Follow us on Instagram →
        </a>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
