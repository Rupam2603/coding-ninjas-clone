import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const CTABanner = () => (
  <section className="relative py-20 px-4 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-cn-orange via-orange-500 to-red-500"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTEydjRoMTJ6TTI0IDI0djJoMTJ2LTJIMjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
        Start Your Coding Journey <br className="hidden sm:block" /> Today
      </h2>
      <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
        Join 1M+ learners who transformed their careers with Coding Ninjas.
        Start for free. Cancel anytime.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/courses">
          <Button variant="white" size="lg" icon={<ArrowRight size={18} />}>
            Get Started for Free
          </Button>
        </Link>
        <Link to="/courses">
          <Button variant="ghost" size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white">
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
export default CTABanner;
