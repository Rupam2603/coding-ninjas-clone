import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code, Brain, BarChart3, Swords, Server,
  GraduationCap, LogOut, User, BookOpen, Settings } from "lucide-react";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

const courseCategories = [
  { name: "Software Development", icon: <Code size={18} />, desc: "Full Stack, Frontend, Backend, DSA", link: "/courses?cat=software-dev" },
  { name: "AI & Machine Learning", icon: <Brain size={18} />, desc: "ML, Deep Learning, NLP, Computer Vision", link: "/courses?cat=ai-ml" },
  { name: "Data Science", icon: <BarChart3 size={18} />, desc: "Analytics, SQL, Visualization, Statistics", link: "/courses?cat=data-science" },
  { name: "Competitive Programming", icon: <Swords size={18} />, desc: "ICPC, CodeChef, Codeforces prep", link: "/courses?cat=competitive" },
  { name: "DevOps & Security", icon: <Server size={18} />, desc: "Docker, K8s, AWS, Cyber Security", link: "/courses?cat=devops" },
];

const navLinks = [
  { name: "Courses", hasDropdown: true },
  { name: "Practice", to: "/courses" },
  { name: "Mentor", to: "/about" },
  { name: "Blog", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const profileRef = useRef(null);
  const { user, isLoggedIn, logout, openLogin, openRegister } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(false);
    setProfileOpen(false);
  }, [location]);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? "bg-cn-darker/95 backdrop-blur-lg shadow-xl shadow-black/20" : "bg-cn-dark"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cn-orange to-orange-600 flex items-center justify-center">
              <GraduationCap size={18} className="text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-cn-orange group-hover:text-orange-400 transition-colors">Coding</span>
              <span className="text-white">Ninjas</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300
                    hover:text-white transition-colors rounded-lg hover:bg-white/5">
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${dropdown ? "rotate-180" : ""}`} />
                  </button>

                  {/* Mega Menu */}
                  {dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-fade-in">
                      <div className="bg-cn-darker border border-cn-border rounded-xl shadow-2xl shadow-black/40 p-4 w-[480px]">
                        <div className="grid gap-1">
                          {courseCategories.map((cat) => (
                            <Link key={cat.name} to={cat.link}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                              <div className="w-9 h-9 rounded-lg bg-cn-orange/10 flex items-center justify-center
                                text-cn-orange group-hover/item:bg-cn-orange group-hover/item:text-white transition-all">
                                {cat.icon}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white">{cat.name}</div>
                                <div className="text-xs text-cn-gray mt-0.5">{cat.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-cn-border mt-3 pt-3">
                          <Link to="/courses"
                            className="text-sm text-cn-orange hover:text-orange-400 font-medium flex items-center gap-1">
                            View All Courses →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} to={link.to}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white
                    transition-colors rounded-lg hover:bg-white/5">
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right side: Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {isLoggedIn ? (
              /* Profile Dropdown */
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cn-orange to-orange-600
                    flex items-center justify-center text-white text-sm font-bold">
                    {user.avatar}
                  </div>
                  <span className="text-sm text-white font-medium max-w-[120px] truncate">
                    {user.name}
                  </span>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
                </button>

                {profileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-cn-darker border border-cn-border
                    rounded-xl shadow-2xl shadow-black/40 py-2 animate-fade-in">
                    {/* User info */}
                    <div className="px-4 py-3 border-b border-cn-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cn-orange to-orange-600
                          flex items-center justify-center text-white font-bold">
                          {user.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="text-white font-semibold text-sm truncate">{user.name}</div>
                          <div className="text-gray-500 text-xs truncate">{user.email}</div>
                          {user.provider !== "email" && (
                            <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-medium
                              text-cn-orange bg-cn-orange/10 px-2 py-0.5 rounded-full capitalize">
                              via {user.provider}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Menu items */}
                    <div className="py-1">
                      <Link to="/courses"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300
                          hover:text-white hover:bg-white/5 transition-colors">
                        <BookOpen size={16} /> My Courses
                      </Link>
                      <button
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300
                          hover:text-white hover:bg-white/5 transition-colors">
                        <User size={16} /> Profile
                      </button>
                      <button
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300
                          hover:text-white hover:bg-white/5 transition-colors">
                        <Settings size={16} /> Settings
                      </button>
                    </div>

                    <div className="border-t border-cn-border pt-1">
                      <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400
                          hover:text-red-300 hover:bg-red-500/5 transition-colors">
                        <LogOut size={16} /> Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={openLogin}>Log In</Button>
                <Button variant="primary" size="sm" onClick={openRegister}>Sign Up Free</Button>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-cn-darker border-t border-cn-border animate-slide-right">
          <div className="px-4 py-4 space-y-1">
            {isLoggedIn && (
              <div className="flex items-center gap-3 px-3 py-3 mb-2 bg-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cn-orange to-orange-600
                  flex items-center justify-center text-white font-bold">
                  {user.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{user.name}</div>
                  <div className="text-gray-500 text-xs">{user.email}</div>
                </div>
              </div>
            )}

            {courseCategories.map((cat) => (
              <Link key={cat.name} to={cat.link}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-cn-orange">{cat.icon}</span>
                <span className="text-sm text-gray-300">{cat.name}</span>
              </Link>
            ))}
            <div className="border-t border-cn-border my-3"></div>
            <Link to="/about" className="block px-3 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5">
              About Us
            </Link>
            <Link to="/contact" className="block px-3 py-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5">
              Contact
            </Link>
            <div className="flex gap-3 pt-3">
              {isLoggedIn ? (
                <Button variant="outline" size="sm" className="flex-1" onClick={logout}>
                  Log Out
                </Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="flex-1" onClick={openLogin}>Log In</Button>
                  <Button variant="primary" size="sm" className="flex-1" onClick={openRegister}>Sign Up</Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;