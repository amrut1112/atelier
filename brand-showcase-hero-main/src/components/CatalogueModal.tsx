import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface CatalogueModalProps {
  open: boolean;
  onClose: () => void;
}

const CatalogueModal = ({ open, onClose }: CatalogueModalProps) => {
  const [phase, setPhase] = useState<"closed" | "idle" | "opening">("closed");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (open) {
      setPhase("closed");
      const t = setTimeout(() => setPhase("idle"), 60);
      return () => clearTimeout(t);
    } else {
      setPhase("closed");
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "" });
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("catalogue_leads").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
      });
      if (error) {
        toast.error("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      // Doors open animation then download
      setPhase("opening");
      setSubmitted(true);
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/CATALOG.PDF";
        link.download = "Atelier-Catalogue.pdf";
        link.click();
      }, 900);
      setTimeout(() => onClose(), 2400);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (phase === "closed" && !open) return null;

  const leftTransform =
    phase === "opening" ? "translateX(-110%)" :
    phase === "idle"    ? "translateX(-88%)" :
                          "translateX(0%)";

  const rightTransform =
    phase === "opening" ? "translateX(110%)" :
    phase === "idle"    ? "translateX(88%)" :
                          "translateX(0%)";

  const doorTransition = phase === "opening"
    ? "transform 1.1s cubic-bezier(0.76,0,0.24,1)"
    : "transform 0.8s cubic-bezier(0.76,0,0.24,1)";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "rgba(8,8,8,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative flex items-stretch"
        style={{ width: 680, height: 500 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── CLOSE BUTTON — always on top ── */}
        <button
          className="absolute right-4 top-4 z-50 w-8 h-8 flex items-center justify-center text-[#888] hover:text-[#222] transition-colors"
          onClick={onClose}
          aria-label="Close"
          style={{ background: "#f5f3ef", borderRadius: 2 }}
        >
          ✕
        </button>
        {/* ── FORM behind doors ── */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div
            className="w-full h-full flex flex-col justify-center px-14 py-10"
            style={{ background: "#f5f3ef", borderRadius: 8, boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
          >
            {submitted ? (
              <div className="text-center">
                <p className="text-2xl font-display font-light tracking-[0.2em] uppercase text-[#2a2a2a]">
                  Welcome Inside
                </p>
                <p className="text-sm text-[#888] mt-2 tracking-widest">Downloading your catalogue…</p>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-[0.35em] uppercase text-[#879E82] mb-2 font-body">
                  Atelier Collection
                </p>
                <h2
                  className="font-display font-light text-[#1a1a1a] mb-8 leading-tight"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "0.08em" }}
                >
                  Enter Your Space
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#c8c0b4] pb-2 text-[#2a2a2a] placeholder-[#aaa] text-sm tracking-wide focus:outline-none focus:border-[#879E82] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#c8c0b4] pb-2 text-[#2a2a2a] placeholder-[#aaa] text-sm tracking-wide focus:outline-none focus:border-[#879E82] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#c8c0b4] pb-2 text-[#2a2a2a] placeholder-[#aaa] text-sm tracking-wide focus:outline-none focus:border-[#879E82] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 w-full py-3 text-xs tracking-[0.3em] uppercase font-body font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                    style={{ background: "#1a1a1a", borderRadius: 4 }}
                  >
                    {loading ? "Please wait…" : "Step Inside"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* ── LEFT DOOR ── */}
        <div
          className="absolute inset-y-0 left-0 z-20"
          style={{ width: "50%", transition: doorTransition, transform: leftTransform }}
        >
          <DoorSVG side="left" />
        </div>

        {/* ── RIGHT DOOR ── */}
        <div
          className="absolute inset-y-0 right-0 z-20"
          style={{ width: "50%", transition: doorTransition, transform: rightTransform }}
        >
          <DoorSVG side="right" />
        </div>
      </div>
    </div>
  );
};

/* ── Pure SVG door — matte black frame, transparent glass, arch geometry ── */
const DoorSVG = ({ side }: { side: "left" | "right" }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 340 500"
    preserveAspectRatio="none"
    style={{ display: "block", transform: side === "right" ? "scaleX(-1)" : "none" }}
  >
    <rect x="6" y="6" width="328" height="488" fill="rgba(240,238,234,0.08)" />
    <g fill="none" stroke="#1a1a1a" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="332" height="492" strokeWidth="10" />
      <line x1="4" y1="135" x2="336" y2="135" strokeWidth="7" />
      <line x1="4" y1="275" x2="336" y2="275" strokeWidth="7" />
      <line x1="220" y1="4" x2="220" y2="135" strokeWidth="7" />
      <line x1="220" y1="135" x2="220" y2="496" strokeWidth="6" />
      <line x1="4" y1="65" x2="220" y2="65" strokeWidth="4" />
      <path d="M220 75 Q220 20 275 20" strokeWidth="5" fill="none" />
      <path d="M28 275 L28 210 Q28 148 170 148 Q312 148 312 210 L312 275" strokeWidth="6" fill="none" />
      <line x1="28" y1="275" x2="28" y2="496" strokeWidth="5" />
      <line x1="312" y1="275" x2="312" y2="496" strokeWidth="5" />
      <path d="M28 496 L28 400 Q28 300 170 300 Q312 300 312 400 L312 496" strokeWidth="6" fill="none" />
      <path d="M75 496 L75 430 Q75 355 170 355 Q265 355 265 430 L265 496" strokeWidth="5" fill="none" />
      <path d="M120 496 L120 455 Q120 405 170 405 Q220 405 220 455 L220 496" strokeWidth="4" fill="none" />
      <rect x="318" y="215" width="5" height="70" rx="2.5" fill="#1a1a1a" stroke="none" />
    </g>
  </svg>
);

export default CatalogueModal;
