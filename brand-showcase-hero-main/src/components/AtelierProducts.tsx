import glideImg from "@/assets/sliding door.jpg";
import flexImg from "@/assets/folding door.jpg";
import vertexImg from "@/assets/sliding door (2).jpg";
import frameImg from "@/assets/fix partition (3).jpg";
import ghostImg from "@/assets/ghost door (2).jpg";
import axisImg from "@/assets/openable door.jpg";
import lumeImg from "@/assets/led mirror.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";

const products = [
  {
    key: "glide",
    icon: "🚪",
    name: "Atelier Glide",
    label: "Sliding Door System",
    description:
      "A seamless sliding system designed for modern living, Atelier Glide transforms spaces with smooth motion and minimal visual interruption. Engineered for precision and elegance, it allows maximum light flow while maintaining structural strength—perfect for contemporary homes and offices.",
    image: glideImg,
  },
  {
    key: "flex",
    icon: "🚪",
    name: "Atelier Flex",
    label: "Folding Door System",
    description:
      "Atelier Flex redefines flexibility in space design. With its intelligent folding mechanism, it effortlessly opens up entire sections, creating a fluid connection between spaces. Ideal for large openings, it combines durability with refined aesthetics.",
    image: flexImg,
  },
  {
    key: "vertex",
    icon: "📐",
    name: "Atelier Vertex",
    label: "L-Shape / Corner Sliding System",
    description:
      "Designed for architectural freedom, Atelier Vertex eliminates boundaries at corners. This L-shaped sliding system offers uninterrupted views and a bold spatial experience, making it perfect for premium residential and commercial projects.",
    image: vertexImg,
  },
  {
    key: "frame",
    icon: "🧱",
    name: "Atelier Frame",
    label: "Fixed Partition System",
    description:
      "Clean, structured, and timeless—Atelier Frame is crafted to define spaces without closing them off. Ideal for offices and interiors, it delivers a perfect balance of openness and separation with a refined, architectural finish.",
    image: frameImg,
  },
  {
    key: "wardrobe",
    icon: "🧥",
    name: "Atelier Wardrobe",
    label: "Concealed Wardrobe System",
    description:
      "Minimalism at its finest - Atelier Wardrobe is designed to blend seamlessly into the architecture of your space. With concealed framing and a flush, handle-less finish, it integrates effortlessly into the wall, creating a clean, uninterrupted visual flow. Crafted for modern interiors, it transforms storage into a subtle, refined design statement where functionality remains hidden behind pure simplicity.",
    image: wardrobeImg,
  },
  {
    key: "lume",
    icon: "💡",
    name: "Atelier Lume",
    label: "LED Mirror / Lighting System",
    description:
      "Atelier Lume blends illumination with design. Featuring integrated LED technology, it enhances both functionality and ambiance, delivering a soft, balanced glow that elevates modern interiors with a touch of sophistication.",
    image: lumeImg,
  },
  {
    key: "axis",
    icon: "🚪",
    name: "Atelier Axis",
    label: "Openable Door System",
    description:
      "Precision-built for everyday performance, Atelier Axis offers a perfect balance of strength, smooth operation, and clean design. Its engineered hinges and structure ensure durability while maintaining a sleek architectural presence.",
    image: axisImg,
  },
  {
    key: "ghost",
    icon: "🚪",
    name: "Atelier Ghost",
    label: "Invisible / Concealed Door System",
    description:
      "Minimalism at its finest—Atelier Ghost is designed to disappear into the space. With concealed frames and a flush finish, it creates a seamless wall integration, ideal for ultra-modern interiors where simplicity defines luxury.",
    image: ghostImg,
  },
];

const AtelierProducts = () => (
  <section id="products" className="py-20 bg-muted/40">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12 reveal">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">
          Atelier Systems
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Door & Partition Systems
        </h2>
        <p className="text-muted-foreground">
          A complete suite of engineered systems crafted to shape light, movement, and privacy in modern interiors.
        </p>
      </div>

      <div className="grid gap-8 md:gap-10 md:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.key}
            className="group rounded-2xl overflow-hidden bg-background border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 reveal"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] h-full">
              <div className="p-6 sm:p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{product.icon}</span>
                  <div className="text-left">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">
                      {product.label}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {product.description}
                </p>
              </div>

              <div className="relative h-52 sm:h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AtelierProducts;

