import { useState } from "react";
import CourseCard from "./CourseCard";
import { courses, categories } from "../data/courses";
import { Link } from "react-router-dom";

const CourseGrid = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? courses : courses.filter((c) => c.category === active);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Popular <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
            Curated, industry-relevant courses to get you job-ready fast
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                ${active === cat.id
                  ? "bg-cn-orange text-white shadow-lg shadow-cn-orange/25"
                  : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
                }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.slice(0, 8).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link to="/courses"
            className="inline-flex items-center gap-2 text-cn-orange hover:text-cn-orange-hover
              font-semibold text-base transition-colors">
            View All Courses
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CourseGrid;