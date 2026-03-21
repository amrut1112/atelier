const cards = [
  {
    title: "Designed Around You",
    text: "Every design we create is tailored to your needs, space, and style. We listen, sketch, tweak, and craft a solution that fits your taste, routine, and room perfectly.",
  },
  {
    title: "Expert Guidance",
    text: "Our design experts guide you through styles, layouts, and finishes. We walk you through every option upfront so you're always in control of your dream space.",
  },
  {
    title: "Smart Prices, No Surprises",
    text: "We offer transparent pricing so you know exactly what you're paying for — premium finishes, built-in lighting, or soft-close drawers. Quality craftsmanship at honest prices.",
  },
];

const VisionCards = () => (
  <section className="py-16 bg-muted">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
        Why Choose <span className="text-primary">Atelier?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className={`bg-card rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-primary reveal delay-${(i + 1) * 100}`}
          >
            <h3 className="text-xl font-bold font-display text-foreground mb-4">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionCards;
