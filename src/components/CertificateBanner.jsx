import { Shield, GraduationCap, FileCheck } from "lucide-react";

const CertificateBanner = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-cn-dark to-cn-darker text-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-cn-orange/10 border border-cn-orange/20
          rounded-full px-4 py-1.5 mb-4">
          <GraduationCap size={14} className="text-cn-orange" />
          <span className="text-cn-orange text-xs font-semibold uppercase tracking-wider">
            Certified Programs
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          Industry-Recognized <br />
          <span className="gradient-text">Certificates</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Earn certificates from top universities and companies. Showcase your skills
          to recruiters and stand out in the hiring process.
        </p>
        <div className="space-y-4">
          {[
            { icon: <Shield size={18} />, text: "Verified certificates on blockchain" },
            { icon: <FileCheck size={18} />, text: "Recognized by 500+ hiring partners" },
            { icon: <GraduationCap size={18} />, text: "In collaboration with top IITs" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cn-orange/10 flex items-center justify-center text-cn-orange">
                {item.icon}
              </div>
              <span className="text-gray-300 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate visual */}
      <div className="flex justify-center">
        <div className="relative w-80 h-56 bg-gradient-to-br from-amber-50 to-orange-50
          rounded-2xl border-2 border-amber-200 shadow-2xl p-6 transform rotate-2
          hover:rotate-0 transition-transform duration-500">
          <div className="absolute top-3 right-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cn-orange to-red-500
              flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Certificate of Completion</div>
          <div className="text-lg font-bold text-gray-800 mb-1">Data Structures &amp; Algorithms</div>
          <div className="text-sm text-gray-500 mb-4">Awarded to <span className="font-semibold text-gray-700">Student Name</span></div>
          <div className="border-t border-amber-200 pt-3 flex justify-between items-center">
            <div>
              <div className="text-[10px] text-gray-400">Issued by</div>
              <div className="text-xs font-bold text-cn-orange">CodingNinjas</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-gray-400">Date</div>
              <div className="text-xs font-semibold text-gray-600">{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default CertificateBanner;
