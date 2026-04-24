import { useParams, Link } from "react-router-dom";
import { Star, Users, Clock, ChevronDown, ChevronUp, BookOpen, Award, CheckCircle2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { courses } from "../data/courses";
import Button from "../components/Button";
import CourseCard from "../components/CourseCard";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));
  const [openSection, setOpenSection] = useState(0);
  const { isLoggedIn, openLogin } = useAuth();
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    if (!isLoggedIn) {
      openLogin();
      return;
    }
    setEnrolled(true);
    setTimeout(() => setEnrolled(false), 3000);
  };

  if (!course) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h2>
          <p className="text-gray-500 mb-6">The course you're  doesn't exist.</p>
          <Link to="/courses">
            <Button variant="primary">Browse Courses</Button>
          </Link>
        </div>
      </main>
    );
  }

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-cn-dark to-cn-darker text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/courses"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((t) => (
                  <span key={t} className="text-xs bg-cn-orange/10 text-cn-orange px-3 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
                {course.bestseller && (
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full font-medium">
                    🔥 Bestseller
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-400 text-lg mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <Star size={16} fill="currentColor" /> {course.rating}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <Users size={16} /> {(course.students / 1000).toFixed(0)}k students
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <Clock size={16} /> {course.duration}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <BookOpen size={16} /> {course.level}
                </span>
              </div>

              {course.instructor && (
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cn-orange to-orange-600
                    flex items-center justify-center text-white text-sm font-bold">
                    {course.instructor.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{course.instructor.name}</div>
                    <div className="text-gray-500 text-xs">{course.instructor.role}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing card */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-gray-900 h-fit">
              <img src={course.image} alt={course.title}
                className="w-full h-44 object-cover rounded-xl mb-5" />

              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-black">₹{course.price.toLocaleString()}</span>
                <span className="text-lg line-through text-gray-400">₹{course.originalPrice.toLocaleString()}</span>
              </div>
              <div className="text-green-600 font-bold text-sm mb-5">{discount}% discount applied</div>

              {enrolled && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-3 text-center animate-fade-in">
                  <p className="text-green-700 font-semibold text-sm">🎉 Successfully enrolled!</p>
                </div>
              )}
              <Button variant="primary" size="lg" className="w-full mb-3" onClick={handleEnroll}>
                {enrolled ? "✓ Enrolled" : "Enroll Now"}
              </Button>
              <Button variant="outline" size="lg" className="w-full" onClick={() => !isLoggedIn && openLogin()}>
                Try for Free
              </Button>

              <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                {[
                  "Full lifetime access",
                  "Certificate of completion",
                  "1-on-1 doubt support",
                  "Project-based learning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Course <span className="gradient-text">Curriculum</span>
            </h2>

            <div className="space-y-3">
              {course.curriculum.map((topic, i) => (
                <div key={i}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenSection(openSection === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-4 text-left
                      hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold
                        ${openSection === i
                          ? "bg-cn-orange text-white"
                          : "bg-gray-100 text-gray-600"
                        }`}>
                        {i + 1}
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{topic}</span>
                    </div>
                    {openSection === i ? <ChevronUp size={18} className="text-gray-400" />
                      : <ChevronDown size={18} className="text-gray-400" />}
                  </button>
                  {openSection === i && (
                    <div className="px-4 pb-4 animate-fade-in">
                      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600 leading-relaxed">
                        Learn the fundamentals and advanced concepts of {topic}. Includes
                        hands-on practice problems, quizzes, and a mini-project.
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* What you'll learn */}
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                What You'll <span className="gradient-text">Learn</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.curriculum.map((topic) => (
                  <div key={topic} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-cn-orange mt-0.5 flex-shrink-0" />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award size={18} className="text-cn-orange" />
                Course Highlights
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-semibold text-gray-900">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Level</span>
                  <span className="font-semibold text-gray-900">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Modules</span>
                  <span className="font-semibold text-gray-900">{course.curriculum.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Students</span>
                  <span className="font-semibold text-gray-900">{(course.students / 1000).toFixed(0)}k+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-semibold text-amber-500 flex items-center gap-1">
                    <Star size={12} fill="currentColor" /> {course.rating}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Certificate</span>
                  <span className="font-semibold text-green-600">✓ Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related courses */}
        {relatedCourses.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Related <span className="gradient-text">Courses</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedCourses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
export default CourseDetail;