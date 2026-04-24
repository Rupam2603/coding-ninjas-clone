import { TrendingUp, Award, Building, ArrowUpRight } from "lucide-react";
import { companies } from "../data/companies";

const placementStats = [
  { value: "₹12 LPA", label: "Average Package", icon: <TrendingUp size={20} /> },
  { value: "₹45 LPA", label: "Highest Package", icon: <ArrowUpRight size={20} /> },
  { value: "95%", label: "Placement Rate", icon: <Award size={20} /> },
  { value: "500+", label: "Hiring Partners", icon: <Building size={20} /> },
];

const PlacementSection = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Placement <span className="gradient-text">Success</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          Our students are working at the world's top tech companies
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        {placementStats.map((s) => (
          <div key={s.label}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center
              hover:border-cn-orange/30 hover:bg-white/10 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl
              bg-cn-orange/10 text-cn-orange mb-3 group-hover:bg-cn-orange
              group-hover:text-white transition-all">
              {s.icon}
            </div>
            <div className="text-2xl md:text-3xl font-black text-white mb-1">{s.value}</div>
            <div className="text-gray-400 text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Company logos grid */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {companies.slice(0, 16).map((c, i) => (
          <div key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-3 text-center
              hover:bg-white/10 hover:border-cn-orange/30 transition-all duration-300
              flex flex-col items-center justify-center gap-1">
            <span className="text-2xl">{c.logo}</span>
            <span className="text-[10px] text-gray-500 font-medium">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default PlacementSection;
