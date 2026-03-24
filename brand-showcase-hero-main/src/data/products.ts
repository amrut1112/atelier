// Sliding Door
import slidingDoor1 from "@/assets/sliding door.jpg";
import slidingDoor2 from "@/assets/SLIDING DOOR 1.jpg";
import slidingDoor3 from "@/assets/SLIDING DOOR 3.jpg";
import slidingDoor4 from "@/assets/TWO SIDE SLIDING DOOR.jpg";
import slidingHero from "@/assets/SLIDING DOOR 1.jpg";

// Folding Door
import foldingDoor1 from "@/assets/folding door.jpg";
import foldingDoor2 from "@/assets/FOLDING DOOR 1.jpg";
import foldingDoor3 from "@/assets/FOLDING DOOR 2.jpg";
import foldingHero from "@/assets/folding door hero.jpg";

// Vertex (L-Shape)
import vertexImg1 from "@/assets/L SHAPED 2.jpg";
import vertexImg2 from "@/assets/L SHAPED.jpg";
import vertexHero from "@/assets/L SHAPED 2.jpg";

// Fixed Partition
import fixedImg1 from "@/assets/fix partition.jpg";
import fixedImg2 from "@/assets/fix partition (2).jpg";
import fixedImg3 from "@/assets/fix partition (3).jpg";
import fixedImg4 from "@/assets/FIXED PARITION 3.jpg";
import fixedHero from "@/assets/FIXED PARITION 3.jpg";

// Wardrobe
import wardrobeImg1 from "@/assets/wardrobe.jpg";
import wardrobeImg2 from "@/assets/WARDROPE 1.jpg";
import wardrobeImg3 from "@/assets/WARDROPE OPEABLE SHUTTER 2.jpg";
import wardrobeImg4 from "@/assets/WARDROPE OPENABLE SHUTTER.jpg";
import wardrobeHero from "@/assets/WARDROPE 1.jpg";

// LED Mirror
import lumeImg1 from "@/assets/led mirror.jpg";
import lumeImg2 from "@/assets/led mirror (2).jpg";
import lumeImg3 from "@/assets/led mirror (3).jpg";

// Openable Door
import axisImg1 from "@/assets/openable door.jpg";
import axisImg2 from "@/assets/openable door (2).jpg";
import axisImg3 from "@/assets/OPENABLE DOOR 3.jpg";
import axisImg4 from "@/assets/opeanble door.jpg";
import axisHero from "@/assets/openable-door-new.png";

// Ghost Door
import ghostImg1 from "@/assets/ghost door.jpg";
import ghostImg2 from "@/assets/ghost door (2).jpg";

// Synchro
import synchroImg1 from "@/assets/synchro.jpg";
import synchroImg2 from "@/assets/SYNCHRO 1.jpg";

export interface Product {
  key: string;
  slug: string;
  name: string;
  label: string;
  tagline: string;
  description: string;
  details: string[];
  specs: { label: string; value: string }[];
  images: string[];
  heroImage: string;
  color: string;
}

export const products: Product[] = [
  {
    key: "glide",
    slug: "sliding-door",
    name: "Atelier Glide",
    label: "Sliding Door System",
    tagline: "Motion without interruption.",
    description: "A seamless sliding system designed for modern living, Atelier Glide transforms spaces with smooth motion and minimal visual interruption. Engineered for precision and elegance, it allows maximum light flow while maintaining structural strength — perfect for contemporary homes and offices.",
    details: ["Top-hung or bottom-rolling track options", "Soft-close mechanism as standard", "Available in single, double, and bypass configurations", "Matte black, brushed gold, and satin silver hardware", "Compatible with glass, wood, and composite panels"],
    specs: [{ label: "Max Panel Width", value: "1200mm" }, { label: "Max Panel Height", value: "3000mm" }, { label: "Track Load", value: "Up to 120kg" }, { label: "Frame", value: "Aluminium alloy" }, { label: "Finish", value: "Powder coated / Anodised" }],
    images: [slidingDoor1, slidingDoor2, slidingDoor3, slidingDoor4],
    heroImage: slidingHero,
    color: "#879E82",
  },
  {
    key: "flex",
    slug: "folding-door",
    name: "Atelier Flex",
    label: "Folding Door System",
    tagline: "Open everything. Close nothing.",
    description: "Atelier Flex redefines flexibility in space design. With its intelligent folding mechanism, it effortlessly opens up entire sections, creating a fluid connection between spaces. Ideal for large openings, it combines durability with refined aesthetics.",
    details: ["Bi-fold and multi-fold configurations", "Flush floor track for seamless transitions", "Integrated weather sealing for outdoor use", "Panels fold to a compact stack", "Custom panel count from 2 to 8 leaves"],
    specs: [{ label: "Max Opening Width", value: "6000mm" }, { label: "Panel Height", value: "Up to 2800mm" }, { label: "Panel Width", value: "400–900mm each" }, { label: "Frame", value: "Extruded aluminium" }, { label: "Glazing", value: "Single / Double / Frosted" }],
    images: [foldingDoor1, foldingDoor2, foldingDoor3],
    heroImage: foldingHero,
    color: "#C9B898",
  },
  {
    key: "vertex",
    slug: "l-shape-sliding",
    name: "Atelier Vertex",
    label: "L-Shape Corner Sliding System",
    tagline: "Corners reimagined.",
    description: "Designed for architectural freedom, Atelier Vertex eliminates boundaries at corners. This L-shaped sliding system offers uninterrupted views and a bold spatial experience, making it perfect for premium residential and commercial projects.",
    details: ["90° corner sliding without a fixed post", "Mitre-cut glass for seamless corner join", "Pivot or sliding operation", "Structural silicone bonding option", "Ideal for panoramic openings"],
    specs: [{ label: "Corner Angle", value: "90°" }, { label: "Max Panel Height", value: "2800mm" }, { label: "Glass Thickness", value: "8–12mm toughened" }, { label: "Frame", value: "Matte black aluminium" }, { label: "Hardware", value: "Concealed pivot system" }],
    images: [vertexImg1, vertexImg2],
    heroImage: vertexHero,
    color: "#879E82",
  },
  {
    key: "frame",
    slug: "fixed-partition",
    name: "Atelier Frame",
    label: "Fixed Partition System",
    tagline: "Define space. Preserve light.",
    description: "Clean, structured, and timeless — Atelier Frame is crafted to define spaces without closing them off. Ideal for offices and interiors, it delivers a perfect balance of openness and separation with a refined, architectural finish.",
    details: ["Floor-to-ceiling fixed glass partitions", "Minimal sightline aluminium profiles", "Single and double glazing options", "Integrated door openings available", "Acoustic performance up to 42dB"],
    specs: [{ label: "Profile Width", value: "50mm / 80mm sightline" }, { label: "Max Height", value: "3500mm" }, { label: "Glazing", value: "6–12mm toughened / laminated" }, { label: "Acoustic Rating", value: "Up to Rw 42dB" }, { label: "Frame", value: "Thermally broken aluminium" }],
    images: [fixedImg1, fixedImg2, fixedImg3, fixedImg4],
    heroImage: fixedHero,
    color: "#6b8f71",
  },
  {
    key: "wardrobe",
    slug: "wardrobe",
    name: "Atelier Wardrobe",
    label: "Concealed Wardrobe System",
    tagline: "Storage that disappears.",
    description: "Minimalism at its finest — Atelier Wardrobe is designed to blend seamlessly into the architecture of your space. With concealed framing and a flush, handle-less finish, it integrates effortlessly into the wall, creating a clean, uninterrupted visual flow.",
    details: [
      "Sliding Wardrobe — smooth top-hung track, handle-less push-to-open",
      "Openable Wardrobe — soft-close concealed hinges, full-height swing panels",
      "Floor-to-ceiling panel integration for both variants",
      "Interior lighting and mirror options",
      "Custom internal fittings and organizers",
    ],
    specs: [{ label: "Variants", value: "Sliding / Openable Shutter" }, { label: "Max Height", value: "2800mm" }, { label: "Panel Material", value: "MDF / Acrylic / Glass" }, { label: "Hardware", value: "Soft-close concealed hinges" }, { label: "Finish", value: "Matte / Gloss / Textured" }],
    images: [wardrobeImg1, wardrobeImg2, wardrobeImg3, wardrobeImg4],
    heroImage: wardrobeHero,
    color: "#C9B898",
  },
  {
    key: "lume",
    slug: "led-mirror",
    name: "Atelier Lume",
    label: "LED Mirror System",
    tagline: "Light as a design element.",
    description: "Atelier Lume blends illumination with design. Featuring integrated LED technology, it enhances both functionality and ambiance, delivering a soft, balanced glow that elevates modern interiors with a touch of sophistication.",
    details: ["Anti-fog coating as standard", "Touch-sensitive dimmer control", "Warm / cool / neutral light modes", "Frameless and framed options", "IP44 rated for bathroom use"],
    specs: [{ label: "LED Type", value: "SMD 2835, CRI >90" }, { label: "Colour Temp", value: "2700K – 6500K adjustable" }, { label: "Power", value: "12W – 36W" }, { label: "IP Rating", value: "IP44" }, { label: "Sizes", value: "Custom from 400×600mm" }],
    images: [lumeImg1, lumeImg2, lumeImg3],
    heroImage: lumeImg1,
    color: "#d4b896",
  },
  {
    key: "axis",
    slug: "openable-door",
    name: "Atelier Axis",
    label: "Openable Door System",
    tagline: "Precision in every swing.",
    description: "Precision-built for everyday performance, Atelier Axis offers a perfect balance of strength, smooth operation, and clean design. Its engineered hinges and structure ensure durability while maintaining a sleek architectural presence.",
    details: ["Single and double leaf configurations", "Concealed or exposed hinge options", "Soft-close and hold-open mechanisms", "Glass, solid, and louvred panel options", "Rebated and flush frame profiles"],
    specs: [{ label: "Max Door Width", value: "1200mm single leaf" }, { label: "Max Door Height", value: "2800mm" }, { label: "Hinge Type", value: "Concealed 3D adjustable" }, { label: "Frame", value: "Aluminium / Steel" }, { label: "Hardware", value: "Soft-close standard" }],
    images: [axisImg1, axisImg2, axisImg3, axisImg4],
    heroImage: axisHero,
    color: "#879E82",
  },
  {
    key: "ghost",
    slug: "ghost-door",
    name: "Atelier Ghost",
    label: "Invisible Concealed Door System",
    tagline: "The door that isn't there.",
    description: "Minimalism at its finest — Atelier Ghost is designed to disappear into the space. With concealed frames and a flush finish, it creates a seamless wall integration, ideal for ultra-modern interiors where simplicity defines luxury.",
    details: ["Flush with wall surface — no visible frame", "Continuous hinge for full-height operation", "Magnetic catch — no handle required", "Compatible with all wall finishes", "Pivot and swing configurations"],
    specs: [{ label: "Max Door Width", value: "1000mm" }, { label: "Max Door Height", value: "2800mm" }, { label: "Frame Visibility", value: "Zero sightline" }, { label: "Hinge", value: "Continuous / Pivot" }, { label: "Finish", value: "Matches wall cladding" }],
    images: [ghostImg1, ghostImg2],
    heroImage: ghostImg1,
    color: "#888",
  },
  {
    key: "synchro",
    slug: "synchro",
    name: "Atelier Synchro",
    label: "Synchronized Sliding System",
    tagline: "Two panels. One motion.",
    description: "Atelier Synchro is an engineered synchronized sliding system where two panels move in perfect unison from a single touch. Designed for wide openings that demand symmetry and precision, it delivers a theatrical reveal every time.",
    details: ["Synchronized dual-panel operation", "Single-point handle controls both panels", "Soft-close and soft-open dampers", "Available in 2+2 and 3+3 panel configurations", "Ideal for room dividers and feature walls"],
    specs: [{ label: "Configuration", value: "2+2 / 3+3 panels" }, { label: "Max Opening", value: "4800mm" }, { label: "Panel Height", value: "Up to 2800mm" }, { label: "Mechanism", value: "Gear-synchronized top track" }, { label: "Hardware", value: "Matte black / Brushed gold" }],
    images: [synchroImg1, synchroImg2],
    heroImage: synchroImg2,
    color: "#879E82",
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
