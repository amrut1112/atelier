import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home",       action: "home" },
  { label: "About Us",   action: "route:/about" },
  { label: "Collection", action: "section:collection" },
  { label: "Products",   action: "route:/products" },
  { label: "Blog",       action: "section:blog" },
  { label: "Contact Us", action: "section:contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (action: string) => {
    setOpen(false);

    if (action === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action.startsWith("route:")) {
      navigate(action.replace("route:", ""));
      window.scrollTo(0, 0);
      return;
    }

    if (action.startsWith("section:")) {
      const id = action.replace("section:", "");
      if (location.pathname !== "/") {
        // Navigate home first, then scroll after mount
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 400);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <button
          onClick={() => handleNav("home")}
          className="flex-shrink-0 flex items-center gap-3"
        >
          <img src={logo} alt="Atelier" className="h-9 w-auto" />
          <div className="hidden sm:block text-left">
            <p className="text-white font-display font-semibold text-base tracking-[0.2em] uppercase leading-none">
              Atelier
            </p>
            <p className="text-[#C9B898] text-[10px] tracking-[0.15em] uppercase mt-0.5">
              Where Craft Meets Engineering
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, action }) => (
            <button
              key={label}
              onClick={() => handleNav(action)}
              className="text-[#C9B898] font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-[#879E82]"
            >
              {label}
            </button>
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

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#0a0a0a]/98 border-t border-[#C9B898]/20 px-6 pb-6">
          {navLinks.map(({ label, action }) => (
            <button
              key={label}
              onClick={() => handleNav(action)}
              className="block w-full text-left py-3 text-[#C9B898] text-xs tracking-[0.15em] uppercase hover:text-[#879E82] transition-colors border-b border-[#C9B898]/10"
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
