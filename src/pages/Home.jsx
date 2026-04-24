import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import CompanyLogos from "../components/CompanyLogos";
import CourseGrid from "../components/CourseGrid";
import CertificateBanner from "../components/CertificateBanner";
import WhyUs from "../components/WhyUs";
import PlacementSection from "../components/PlacementSection";
import MentorSection from "../components/MentorSection";
import TestimonialCard from "../components/TestimonialCard";
import CTABanner from "../components/CTABanner";
import { testimonials } from "../data/testimonials";

const Home = () => (
  <main>
    <Hero />
    <StatsBar />
    <CompanyLogos />
    <CourseGrid />
    <CertificateBanner />
    <WhyUs />
    <PlacementSection />
    <MentorSection />

    {/* Testimonials */}
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
            Real stories from real students who transformed their careers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </main>
);
export default Home;