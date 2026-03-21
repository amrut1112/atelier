import heroImg from "@/assets/fix partition (2).jpg";

const steps = [
  {
    icon: "✏️",
    title: "Idea & Design",
    desc: "Creating unique and customised designs that blend modern elegance with your personal style.",
  },
  {
    icon: "📋",
    title: "Specification",
    desc: "Estimate cost, details and timeframe for your door system or wardrobe project.",
  },
  {
    icon: "🔨",
    title: "Execution",
    desc: "Deploying effective strategies to deliver your project on time, every time.",
  },
];

const WorkingProcess = () => (
  <section className="py-0 bg-muted">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
      {/* Left content */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">How We Work</span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          Our <span className="font-bold">Working Process</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md">
          At Atelier, we offer customised solutions for all your needs. Our team helps you design a premium door system or wardrobe that defies all odds.
        </p>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className={`flex gap-6 items-start reveal delay-${(i + 1) * 100}`}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-background shadow-md flex items-center justify-center text-xl flex-shrink-0">
                  {step.icon}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 h-8 bg-primary/30 mt-2" />}
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1 h-5 bg-primary rounded" />
                  <h3 className="font-bold font-display text-foreground text-lg">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className="relative hidden lg:block">
        <img src={heroImg} alt="Working Process" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-muted/20" />
      </div>
    </div>
  </section>
);

export default WorkingProcess;
