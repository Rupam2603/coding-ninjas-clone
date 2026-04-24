import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Building, Award } from "lucide-react";

const statsData = [
  { icon: <Users size={24} />, value: 1000000, suffix: "+", label: "Active Learners", format: "compact" },
  { icon: <BookOpen size={24} />, value: 500, suffix: "+", label: "Expert-Led Courses" },
  { icon: <Building size={24} />, value: 500, suffix: "+", label: "Hiring Partners" },
  { icon: <Award size={24} />, value: 95, suffix: "%", label: "Placement Rate" },
];

const formatNum = (val, format) => {
  if (format === "compact") {
    if (val >= 1000000) return (val / 1000000).toFixed(0) + "M";
    if (val >= 1000) return (val / 1000).toFixed(0) + "K";
  }
  return val.toLocaleString();
};

const Counter = ({ target, suffix, format }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-black text-white">
      {formatNum(count, format)}{suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="bg-cn-dark border-y border-cn-border py-10 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cn-orange/5 via-transparent to-cn-orange/5"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
      {statsData.map((stat) => (
        <div key={stat.label} className="text-center group">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl
            bg-cn-orange/10 text-cn-orange mb-3 group-hover:bg-cn-orange group-hover:text-white
            transition-all duration-300">
            {stat.icon}
          </div>
          <div>
            <Counter target={stat.value} suffix={stat.suffix} format={stat.format} />
          </div>
          <div className="text-cn-gray text-sm mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);
export default StatsBar;
