const materials = [
  {
    title: "Wood",
    desc: "A classic choice that brings a natural feel. Whether light oak or dark mahogany, wood gives your space a cosy, stylish vibe that never goes out of fashion.",
  },
  {
    title: "Glass",
    desc: "Modern and classy. Glass makes your room feel open and spacious, lets you see inside at a glance, and adds a touch of elegance with its smooth, shiny finish.",
  },
  {
    title: "Plywood",
    desc: "Strong, sturdy, and super reliable. Perfect for everyday use and available in many colours and styles to match your look.",
  },
];

const features = [
  { title: "Adjustable Shelves", desc: "Move shelves up or down to fit your clothes, bags, or accessories exactly how you need." },
  { title: "Soft-Close Doors", desc: "Doors and drawers shut quietly without slamming, keeping a calm atmosphere and extending the life of your fittings." },
  { title: "Built-in Lighting", desc: "Lights inside your wardrobe so you can see everything clearly, with a soft glow that adds a stylish touch." },
];

const MaterialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">

      {/* Materials */}
      <div className="mb-20">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Use</span>
        <div className="w-10 h-1 bg-primary mt-2 mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12">
          Premium <span className="text-primary">Materials</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((m) => (
            <div key={m.title} className="bg-muted rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-display text-foreground mb-3">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">What You Get</span>
        <div className="w-10 h-1 bg-primary mt-2 mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-12">
          Standard <span className="text-primary">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default MaterialsSection;
