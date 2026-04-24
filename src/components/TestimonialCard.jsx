import { Star, ArrowUpRight } from "lucide-react";

const TestimonialCard = ({ name, role, company, text, avatar, salary, previousRole, color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
    hover:shadow-xl hover:border-cn-orange/20 transition-all duration-300 flex flex-col">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">"{text}"</p>

    {/* Salary badge */}
    {salary && (
      <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-green-50 rounded-lg border border-green-100">
        <ArrowUpRight size={14} className="text-green-600" />
        <span className="text-xs text-green-700 font-medium">
          {previousRole} → <span className="font-bold">{salary}</span>
        </span>
      </div>
    )}

    {/* Author */}
    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color}
        flex items-center justify-center text-white font-bold text-sm shadow-md`}>
        {avatar}
      </div>
      <div>
        <div className="font-semibold text-gray-900 text-sm">{name}</div>
        <div className="text-xs text-gray-400">
          {role} <span className="text-cn-orange font-medium">@ {company}</span>
        </div>
      </div>
    </div>
  </div>
);
export default TestimonialCard;