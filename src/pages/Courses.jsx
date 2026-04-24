import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import CourseCard from "../components/CourseCard";
import { courses, categories } from "../data/courses";

const sortOptions = [
  { id: "popular", label: "Most Popular" },
  { id: "rating",  label: "Highest Rated" },
  { id: "price-low",  label: "Price: Low → High" },
  { id: "price-high", label: "Price: High → Low" },
];

const Courses = () => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get("cat") || "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(catParam);
  const [sort, setSort] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...courses];

    // Category filter
    if (category !== "all") {
      result = result.filter((c) => c.category === category);
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (sort) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      default: // popular
        result.sort((a, b) => b.students - a.students);
    }

    return result;
  }, [category, search, sort]);

  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-cn-dark to-cn-darker text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            All <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Browse our full catalog of {courses.length}+ expert-led courses
          </p>

          {/* Search bar */}
          <div className="flex gap-3 max-w-2xl">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search courses, topics, or skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl pl-11 pr-4 py-3
                  text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cn-orange
                  transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-white/10 border border-white/10 rounded-xl px-4 py-3
                text-gray-400 hover:text-white transition-colors">
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
              {/* Categories */}
              <h3 className="font-bold text-gray-900 text-sm mb-3">Category</h3>
              <div className="space-y-1 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all
                      ${category === cat.id
                        ? "bg-cn-orange/10 text-cn-orange font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                      }`}>
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <h3 className="font-bold text-gray-900 text-sm mb-3">Sort By</h3>
              <div className="space-y-1">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSort(opt.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all
                      ${sort === opt.id
                        ? "bg-cn-orange/10 text-cn-orange font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                      }`}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Course grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-900">{filtered.length}</span> courses
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((c) => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Courses;