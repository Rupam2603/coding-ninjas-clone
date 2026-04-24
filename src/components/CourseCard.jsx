import { Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <Link to={`/courses/${course.id}`}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300
        border border-gray-100 overflow-hidden flex flex-col group card-glow">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {course.bestseller && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold
            px-3 py-1 rounded-full shadow-lg">
            🔥 Bestseller
          </div>
        )}
        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold
          px-2.5 py-1 rounded-full">
          {discount}% OFF
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {course.tags.slice(0, 3).map((t) => (
            <span key={t}
              className="text-[11px] bg-cn-orange/10 text-cn-orange px-2 py-0.5 rounded-md font-medium">
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-cn-orange transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 flex-1 line-clamp-2">{course.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1 text-amber-500 font-semibold">
            <Star size={12} fill="currentColor" /> {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} /> {(course.students / 1000).toFixed(0)}k
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {course.duration}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-gray-900">
              ₹{course.price.toLocaleString()}
            </span>
            <span className="text-sm line-through text-gray-400">
              ₹{course.originalPrice.toLocaleString()}
            </span>
          </div>
          <span className="text-cn-orange text-sm font-semibold group-hover:translate-x-1 transition-transform">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
};
export default CourseCard;