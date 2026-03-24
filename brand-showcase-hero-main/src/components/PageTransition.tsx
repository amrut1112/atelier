import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DoorPanel = ({ side, color }: { side: "left" | "right"; color: string }) => (
  <div
    className="w-full h-full"
    style={{ background: "#0e0e0e", position: "relative" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 340 900"
      preserveAspectRatio="none"
      style={{ display: "block", position: "absolute", inset: 0, transform: side === "right" ? "scaleX(-1)" : "none" }}
    >
      <rect x="4" y="4" width="332" height="892" fill="none" stroke={color} strokeWidth="5" strokeOpacity="0.25" />
      <line x1="4" y1="220" x2="336" y2="220" stroke={color} strokeWidth="3" strokeOpacity="0.18" />
      <line x1="220" y1="4" x2="220" y2="220" stroke={color} strokeWidth="3" strokeOpacity="0.18" />
      <path d="M30 892 L30 380 Q30 240 170 240 Q310 240 310 380 L310 892" stroke={color} strokeWidth="2.5" fill="none" strokeOpacity="0.22" />
      <path d="M80 892 L80 450 Q80 330 170 330 Q260 330 260 450 L260 892" stroke={color} strokeWidth="1.8" fill="none" strokeOpacity="0.16" />
      <path d="M130 892 L130 520 Q130 420 170 420 Q210 420 210 520 L210 892" stroke={color} strokeWidth="1.2" fill="none" strokeOpacity="0.12" />
      <rect x="318" y="400" width="5" height="80" rx="2.5" fill={color} fillOpacity="0.35" />
    </svg>
  </div>
);

// Colours per route
const routeColor = (path: string): string => {
  if (path.startsWith("/products/")) return "#879E82";
  if (path === "/products") return "#C9B898";
  if (path === "/about") return "#879E82";
  return "#C9B898";
};

const PageTransition = () => {
  const location = useLocation();
  // phase: "idle" | "closing" | "closed" | "opening"
  const [phase, setPhase] = useState<"idle" | "closing" | "closed" | "opening">("idle");
  const [color, setColor] = useState("#879E82");

  useEffect(() => {
    // On every route change, run the animation
    setColor(routeColor(location.pathname));
    setPhase("closing");
    const t1 = setTimeout(() => setPhase("closed"), 500);
    const t2 = setTimeout(() => setPhase("opening"), 600);
    const t3 = setTimeout(() => setPhase("idle"), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [location.pathname]);

  if (phase === "idle") return null;

  const ease = "cubic-bezier(0.76,0,0.24,1)";

  const leftTransform =
    phase === "closing" || phase === "closed" ? "translateX(0%)" : "translateX(-100%)";
  const rightTransform =
    phase === "closing" || phase === "closed" ? "translateX(0%)" : "translateX(100%)";

  const transition =
    phase === "closing"
      ? `transform 0.45s ${ease}`
      : phase === "opening"
      ? `transform 0.55s ${ease}`
      : "none";

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden flex">
      {/* Left door */}
      <div
        className="h-full"
        style={{ width: "50%", transition, transform: leftTransform }}
      >
        <DoorPanel side="left" color={color} />
      </div>
      {/* Right door */}
      <div
        className="h-full"
        style={{ width: "50%", transition, transform: rightTransform }}
      >
        <DoorPanel side="right" color={color} />
      </div>
    </div>
  );
};

export default PageTransition;
