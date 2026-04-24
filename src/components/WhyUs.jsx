import { MessageCircle, Users, Briefcase, Award, Video, BookOpen } from "lucide-react";

const features = [
  {
    icon: <MessageCircle size={24} />,
    title: "1-on-1 Doubt Support",
    desc: "Get your doubts resolved within minutes by expert TAs. Available 24/7.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Users size={24} />,
    title: "Industry Mentors",
    desc: "Learn from engineers at Google, Amazon, Microsoft, and more top companies.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Placement Assistance",
    desc: "Resume building, mock interviews, and direct referrals to 500+ companies.",
    color: "from-cn-orange to-red-500",
  },
  {
    icon: <Award size={24} />,
    title: "Verified Certificates",
    desc: "Industry-recognized certificates to boost your resume and LinkedIn profile.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: <Video size={24} />,
    title: "Live + Recorded Classes",
    desc: "Attend live sessions or learn at your own pace with HD recordings.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Project-Based Learning",
    desc: "Build 10+ real-world projects that you can showcase to recruiters.",
    color: "from-pink-500 to-rose-500",
  },
];

const WhyUs = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why <span className="gradient-text">Coding Ninjas</span>?
        </h2>
        <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
          We don't just teach coding — we prepare you for a successful tech career
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title}
            className="group p-6 rounded-2xl border border-gray-100 hover:border-cn-orange/20
              bg-white hover:bg-gradient-to-br hover:from-cn-orange/5 hover:to-transparent
              transition-all duration-300 card-glow">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color}
              flex items-center justify-center text-white mb-4
              group-hover:scale-110 transition-transform duration-300`}>
              {f.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default WhyUs;
