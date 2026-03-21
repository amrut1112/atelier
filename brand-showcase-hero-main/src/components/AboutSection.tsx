import aboutImg1 from "@/assets/about-1.jpg";
import aboutImg2 from "@/assets/about-2.jpg";

const AboutSection = () => (
  <section id="about-us" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="reveal-left">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Atelier</span>
          <div className="w-10 h-1 bg-primary mt-2 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            Where Craft Meets Engineering
          </h2>
          <p className="text-primary font-semibold mb-6">Crafted for Modern Living</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Atelier, we understand that your wardrobe is more than just storage — it's a reflection of your style and routine. Every design we create is a blend of innovative functionality and sophisticated craftsmanship.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We don't believe in one-size-fits-all. Your door system should reflect your space, needs, and personality. From layout planning to material selection, our expert designers work closely with you to craft a solution that is uniquely yours.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            No matter if you live in a cosy Pune apartment or a spacious villa, we have modular solutions that fit right in — sliding doors, folding doors, wardrobes, partitions, and more.
          </p>
          <a
            href="#contact-us"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            Know More
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 reveal-right">
          <img src={aboutImg1} alt="Showroom" className="rounded-xl w-full h-56 object-cover shadow-lg" />
          <img src={aboutImg2} alt="Craftsmanship" className="rounded-xl w-full h-56 object-cover shadow-lg mt-8" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
