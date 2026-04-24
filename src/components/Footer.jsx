import { Link } from "react-router-dom";
import { GraduationCap, Globe, MessageCircle, Video, Camera, Mail, Phone, MapPin } from "lucide-react";

const footerSections = [
  {
    title: "Courses",
    links: [
      { name: "Data Structures & Algo", to: "/courses?cat=software-dev" },
      { name: "Full Stack Web Dev", to: "/courses?cat=software-dev" },
      { name: "Machine Learning", to: "/courses?cat=ai-ml" },
      { name: "System Design", to: "/courses?cat=software-dev" },
      { name: "Data Science", to: "/courses?cat=data-science" },
      { name: "Competitive Programming", to: "/courses?cat=competitive" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", to: "/about" },
      { name: "Careers", to: "/about" },
      { name: "Blog", to: "/about" },
      { name: "Press", to: "/about" },
      { name: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Free Courses", to: "/courses" },
      { name: "Interview Prep", to: "/courses" },
      { name: "Practice Problems", to: "/courses" },
      { name: "Community", to: "/about" },
      { name: "Events", to: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", to: "/contact" },
      { name: "FAQs", to: "/contact" },
      { name: "Privacy Policy", to: "/about" },
      { name: "Terms of Service", to: "/about" },
      { name: "Refund Policy", to: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: <Globe size={18} />, href: "#", label: "Website" },
  { icon: <MessageCircle size={18} />, href: "#", label: "Chat" },
  { icon: <Mail size={18} />, href: "#", label: "Email" },
  { icon: <Video size={18} />, href: "#", label: "YouTube" },
  { icon: <Camera size={18} />, href: "#", label: "Instagram" },
];

const Footer = () => (
  <footer className="bg-cn-darker text-gray-400 pt-16 pb-8 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Top section */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cn-orange to-orange-600
              flex items-center justify-center">
              <GraduationCap size={18} className="text-white" />
            </div>
            <span className="text-xl font-extrabold">
              <span className="text-cn-orange">Coding</span>
              <span className="text-white">Ninjas</span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-xs">
            India's premier platform for learning to code and cracking top tech placements.
            Join 1M+ learners on their path to success.
          </p>

          {/* Contact info */}
          <div className="space-y-2 mb-4">
            <a href="mailto:hello@codingninjas.com"
              className="flex items-center gap-2 text-sm hover:text-cn-orange transition-colors">
              <Mail size={14} /> hello@codingninjas.com
            </a>
            <a href="tel:+911234567890"
              className="flex items-center gap-2 text-sm hover:text-cn-orange transition-colors">
              <Phone size={14} /> +91 12345 67890
            </a>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              <span>Koramangala, Bangalore, India</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10
                  flex items-center justify-center text-gray-500
                  hover:bg-cn-orange hover:border-cn-orange hover:text-white
                  transition-all duration-200">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-white font-semibold text-sm mb-4">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.to}
                    className="text-sm text-gray-500 hover:text-cn-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-white font-bold mb-1">Subscribe to our newsletter</h4>
            <p className="text-sm text-gray-500">Get the latest courses, tips, and career advice delivered to your inbox.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5
                text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cn-orange
                transition-colors"
            />
            <button className="bg-cn-orange hover:bg-cn-orange-hover text-white px-6 py-2.5
              rounded-lg font-semibold text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center
        justify-between gap-3 text-xs text-gray-600">
        <span>© {new Date().getFullYear()} CodingNinjas Clone. Built with React & Tailwind CSS.</span>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-cn-orange transition-colors">Privacy</Link>
          <Link to="/about" className="hover:text-cn-orange transition-colors">Terms</Link>
          <Link to="/contact" className="hover:text-cn-orange transition-colors">Support</Link>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;