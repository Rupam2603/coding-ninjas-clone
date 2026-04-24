import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";
import Button from "./Button";

const Hero = () => (
  <section className="relative bg-gradient-to-br from-cn-dark via-cn-darker to-gray-900 text-white
    pt-28 pb-20 px-4 overflow-hidden min-h-[90vh] flex items-center">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cn-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
        bg-cn-orange/3 rounded-full blur-[120px]"></div>
    </div>

    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left content */}
      <div className="animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-cn-orange/10 border border-cn-orange/20
          rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-cn-orange animate-pulse"></span>
          <span className="text-cn-orange text-xs font-semibold uppercase tracking-wider">
            India's #1 Coding Platform
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
          Master Coding.
          <br />
          <span className="gradient-text">Land Your Dream Job.</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
          Learn Data Structures, Algorithms, Full Stack Development, AI/ML, and more
          with India's top coding educators. Join <span className="text-white font-semibold">1M+</span> learners
          who trust us for their career growth.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link to="/courses">
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Explore Courses
            </Button>
          </Link>
          <Button variant="outline" size="lg" icon={<Play size={18} />}>
            Watch Demo
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
          <div className="flex -space-x-3">
            {["R", "P", "A", "S"].map((letter, i) => (
              <div key={i}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-cn-orange to-orange-600
                  flex items-center justify-center text-white text-xs font-bold border-2 border-cn-dark">
                {letter}
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-sm">★</span>
              ))}
              <span className="text-white text-sm font-semibold ml-1">4.8</span>
            </div>
            <p className="text-gray-500 text-xs mt-0.5">from 50,000+ reviews</p>
          </div>
        </div>
      </div>

      {/* Right: Visual */}
      <div className="hidden lg:block relative animate-fade-in delay-200">
        {/* Main card */}
        <div className="relative">
          <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br
            from-cn-orange/20 to-orange-600/10 border border-cn-orange/20 p-8
            flex flex-col items-center justify-center gap-6">
            {/* Code snippet */}
            <div className="w-full bg-cn-darker rounded-xl p-5 border border-cn-border font-mono text-sm">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-1">
                <p><span className="text-purple-400">function</span> <span className="text-yellow-300">solve</span><span className="text-gray-400">(</span><span className="text-orange-300">arr</span><span className="text-gray-400">)</span> {"{"}</p>
                <p className="pl-4"><span className="text-purple-400">let</span> <span className="text-blue-300">max</span> = <span className="text-cn-orange">0</span>;</p>
                <p className="pl-4"><span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> <span className="text-blue-300">i</span> = <span className="text-cn-orange">0</span>; ...)</p>
                <p className="pl-8"><span className="text-blue-300">max</span> = Math.<span className="text-yellow-300">max</span>(<span className="text-blue-300">max</span>, ...);</p>
                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-blue-300">max</span>;</p>
                <p>{"}"}</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-4 w-full">
              <div className="flex-1 bg-cn-darker/80 rounded-lg p-3 text-center border border-cn-border">
                <BookOpen size={18} className="mx-auto text-cn-orange mb-1" />
                <div className="text-white font-bold text-lg">500+</div>
                <div className="text-gray-500 text-xs">Courses</div>
              </div>
              <div className="flex-1 bg-cn-darker/80 rounded-lg p-3 text-center border border-cn-border">
                <Users size={18} className="mx-auto text-green-400 mb-1" />
                <div className="text-white font-bold text-lg">1M+</div>
                <div className="text-gray-500 text-xs">Students</div>
              </div>
              <div className="flex-1 bg-cn-darker/80 rounded-lg p-3 text-center border border-cn-border">
                <Award size={18} className="mx-auto text-blue-400 mb-1" />
                <div className="text-white font-bold text-lg">95%</div>
                <div className="text-gray-500 text-xs">Placed</div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-green-500/10 border border-green-500/20
            rounded-xl px-4 py-2 animate-float">
            <div className="text-green-400 text-xs font-semibold">✓ 50K+ placed</div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-blue-500/10 border border-blue-500/20
            rounded-xl px-4 py-2 animate-float delay-500">
            <div className="text-blue-400 text-xs font-semibold">🎯 Avg ₹12 LPA</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;