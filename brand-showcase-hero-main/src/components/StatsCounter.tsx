import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 700, suffix: "+", label: "Projects Done" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Design Styles" },
];

const useCountUp = (target: number, duration = 1800, active: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
};

const StatItem = ({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) => {
  const count = useCountUp(value, 1800, active);
  return (
    <div className="text-center px-6">
      <div className="flex items-end justify-center gap-1">
        <span className="font-display font-light text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}>
          {count}
        </span>
        <span className="text-[#879E82] font-display font-light mb-1" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          {suffix}
        </span>
      </div>
      <p className="text-[#C9B898]/70 text-xs tracking-[0.25em] uppercase mt-2 font-body">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16" style={{ background: "#0e0e0e" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center divide-x divide-white/10">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
