import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#0a0a0a] text-[#968972]">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display font-light text-xl text-[#F1DDBF] tracking-[0.15em] uppercase mb-1">
            Atelier
          </h3>
          <p className="text-[#879E82] text-xs tracking-[0.2em] uppercase mb-5">
            Where Craft Meets Engineering
          </p>
          <p className="text-sm leading-relaxed mb-4 text-[#968972]">Bhawani Peth, Pune</p>
          <div className="flex items-center gap-3 text-sm text-[#968972]">
            <Phone className="h-3.5 w-3.5 text-[#879E82]" />
            <span>+91 93247 19780</span>
          </div>
          <div className="flex items-center gap-3 text-sm mt-2 text-[#968972]">
            <Mail className="h-3.5 w-3.5 text-[#879E82]" />
            <span>amrutsuthar1103@gmail.com</span>
          </div>
        </div>
        <div>
          <h4 className="text-[#C9B898] text-xs tracking-[0.2em] uppercase mb-5">Collection</h4>
          <ul className="space-y-2.5 text-sm">
            {["Sliding Door", "Folding Door", "Atelier Wardrobe", "Fixed Partition", "Ghost Door", "LED Mirror", "Synchro"].map((l) => (
              <li key={l}>
                <a href="#collection" className="hover:text-[#879E82] transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[#C9B898] text-xs tracking-[0.2em] uppercase mb-5">Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            {["About Us", "Our Collection", "Working Process", "Blog", "Contact Us"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-[#879E82] transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[#C9B898] text-xs tracking-[0.2em] uppercase mb-5">Download Catalogue</h4>
          <p className="text-sm text-[#968972] mb-4 leading-relaxed">
            Explore our full range of premium door systems and wardrobes.
          </p>
          <button className="border border-[#879E82] text-[#879E82] px-6 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-[#879E82] hover:text-white transition-all duration-300">
            Download Now
          </button>
        </div>
      </div>
    </div>
    <div className="border-t border-[#968972]/20 py-5">
      <p className="text-center text-xs tracking-[0.15em] text-[#968972]/60 uppercase">
        Atelier © 2026 · All Rights Reserved · Where Craft Meets Engineering
      </p>
    </div>
  </footer>
);

export default Footer;
