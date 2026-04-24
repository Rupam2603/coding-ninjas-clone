import MentorCard from "./MentorCard";
import { mentors } from "../data/mentors";

const MentorSection = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Learn from the <span className="gradient-text">Best</span>
        </h2>
        <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
          Our mentors are industry experts from the world's leading tech companies
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((m) => (
          <MentorCard key={m.id} mentor={m} />
        ))}
      </div>
    </div>
  </section>
);
export default MentorSection;
