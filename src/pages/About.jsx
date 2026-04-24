import { Target, Heart, Rocket, Globe, Users, Award, Code, TrendingUp } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const values = [
  { icon: <Target size={24} />, title: "Mission-Driven", desc: "Making quality tech education accessible to every student in India.", color: "from-cn-orange to-red-500" },
  { icon: <Heart size={24} />, title: "Student First", desc: "Every decision we make puts our students' success above everything.", color: "from-pink-500 to-rose-500" },
  { icon: <Rocket size={24} />, title: "Innovation", desc: "Constantly evolving our curriculum to match industry demands.", color: "from-blue-500 to-cyan-500" },
  { icon: <Globe size={24} />, title: "Inclusive", desc: "Anyone, anywhere can learn to code — regardless of background.", color: "from-green-500 to-emerald-500" },
];

const milestones = [
  { year: "2016", event: "Founded by Ankush Singla, Dhawal Parate, and Kannu Mittal" },
  { year: "2017", event: "Reached 10,000 active students across India" },
  { year: "2018", event: "Launched placement program with top tech companies" },
  { year: "2019", event: "Crossed 100,000 students milestone" },
  { year: "2020", event: "Expanded to AI/ML and Data Science courses" },
  { year: "2021", event: "Achieved 500+ hiring partner companies" },
  { year: "2022", event: "Crossed 500,000 students with 95% placement rate" },
  { year: "2023", event: "Reached 1M+ students, launched global programs" },
];

const teamStats = [
  { icon: <Users size={20} />, value: "200+", label: "Team Members" },
  { icon: <Code size={20} />, value: "50+", label: "Instructors" },
  { icon: <Award size={20} />, value: "500+", label: "Hiring Partners" },
  { icon: <TrendingUp size={20} />, value: "1M+", label: "Students" },
];

const About = () => (
  <main className="min-h-screen pt-16">
    {/* Hero */}
    <section className="bg-gradient-to-br from-cn-dark to-cn-darker text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-cn-orange/10 border border-cn-orange/20
          rounded-full px-4 py-1.5 mb-6">
          <span className="text-cn-orange text-xs font-semibold uppercase tracking-wider">About Us</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Empowering <span className="gradient-text">Millions</span> to <br className="hidden sm:block" />
          Code Their Future
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Coding Ninjas is India's premier coding education platform, helping students
          and professionals master technology skills and land their dream jobs at
          top tech companies.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 px-4 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {teamStats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl
              bg-cn-orange/10 text-cn-orange mb-2">
              {s.icon}
            </div>
            <div className="text-2xl font-black text-gray-900">{s.value}</div>
            <div className="text-sm text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg">The principles that guide everything we do</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl
                hover:border-cn-orange/20 transition-all duration-300 card-glow">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color}
                flex items-center justify-center text-white mb-4`}>
                {v.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="gradient-text">Journey</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 group">
                <div className="relative">
                  <div className={`w-16 h-8 rounded-full flex items-center justify-center text-xs font-bold
                    ${i === milestones.length - 1
                      ? "bg-cn-orange text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-cn-orange/10 group-hover:text-cn-orange"
                    } transition-all z-10 relative`}>
                    {m.year}
                  </div>
                </div>
                <p className="text-gray-600 text-sm pt-1 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 px-4 bg-gradient-to-r from-cn-orange to-red-500 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-4">Want to Join Our Team?</h2>
        <p className="text-orange-100 mb-8 text-lg">
          We're always looking for passionate people to help us transform education.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button variant="white" size="lg">View Open Positions</Button>
          </Link>
        </div>
      </div>
    </section>
  </main>
);
export default About;
