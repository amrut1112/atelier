import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["Home", "About Us", "Collection", "Products", "Blog", "Contact Us"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="/"
          onClick={(e) => {
            // Keep SPA behavior + ensure we return to the top.
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState({}, "", "/");
          }}
          className="flex-shrink-0 flex items-center gap-3"
        >
          <img src={logo} alt="Atelier" className="h-9 w-auto" />
          <div className="hidden sm:block">
            <p className="text-white font-display font-semibold text-base tracking-[0.2em] uppercase leading-none">
              Atelier
            </p>
            <p className="text-[#C9B898] text-[10px] tracking-[0.15em] uppercase mt-0.5">
              Where Craft Meets Engineering
            </p>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="text-[#C9B898] font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-[#879E82]"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#C9B898]"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0a0a0a]/98 border-t border-[#C9B898]/20 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="block py-3 text-[#C9B898] text-xs tracking-[0.15em] uppercase hover:text-[#879E82] transition-colors border-b border-[#C9B898]/10"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
