import { companies } from "../data/companies";

const CompanyLogos = () => (
  <section className="py-14 px-4 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
        Our students work at
      </h3>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {[...companies, ...companies].map((company, i) => (
            <div key={i}
              className="flex-shrink-0 mx-6 flex items-center gap-2 bg-gray-50 rounded-xl
                px-5 py-3 border border-gray-100 hover:border-cn-orange/30
                hover:shadow-md transition-all duration-300 cursor-default">
              <span className="text-2xl">{company.logo}</span>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default CompanyLogos;
