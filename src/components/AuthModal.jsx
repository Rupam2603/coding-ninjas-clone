import { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

/* ── SVG Icons for social providers (inline for no extra deps) ── */
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socialProviders = [
  { id: "google",   name: "Google",   icon: <GoogleIcon />,   bg: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200" },
  { id: "github",   name: "GitHub",   icon: <GitHubIcon />,   bg: "bg-gray-900 hover:bg-gray-800 text-white" },
  { id: "facebook", name: "Facebook", icon: <FacebookIcon />, bg: "bg-[#1877F2] hover:bg-[#166FE5] text-white" },
  { id: "linkedin", name: "LinkedIn", icon: <LinkedInIcon />, bg: "bg-[#0A66C2] hover:bg-[#095196] text-white" },
];

const AuthModal = () => {
  const { showAuthModal, setShowAuthModal, authMode, setAuthMode, login, register, socialLogin } = useAuth();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!showAuthModal) return null;

  const isLogin = authMode === "login";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (isLogin) {
        login({ email: formData.email });
      } else {
        register({ name: formData.name, email: formData.email });
      }
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setShowAuthModal(false);
        setFormData({ name: "", email: "", password: "" });
      }, 1000);
    }, 800);
  };

  const handleSocial = (provider) => {
    setLoading(true);
    setTimeout(() => {
      socialLogin(provider);
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setShowAuthModal(false);
      }, 800);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setShowAuthModal(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-fade-in-up overflow-hidden">
        {/* Success overlay */}
        {success && (
          <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle2 size={32} className="text-green-500" />
            </div>
            <p className="text-lg font-bold text-gray-900">
              {isLogin ? "Welcome back!" : "Account created!"}
            </p>
            <p className="text-sm text-gray-500 mt-1">Redirecting...</p>
          </div>
        )}

        {/* Header */}
        <div className="bg-gradient-to-br from-cn-dark to-cn-darker p-6 text-center relative">
          <button
            onClick={() => setShowAuthModal(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors
              w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center">
            <X size={18} />
          </button>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cn-orange to-orange-600
            flex items-center justify-center mx-auto mb-3">
            <User size={22} className="text-white" />
          </div>
          <h2 className="text-xl font-extrabold text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            {isLogin ? "Log in to access your courses" : "Start your coding journey today"}
          </p>
        </div>

        <div className="p-6">
          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {socialProviders.map((provider) => (
              <button
                key={provider.id}
                onClick={() => handleSocial(provider.id)}
                disabled={loading}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                  text-sm font-medium transition-all duration-200 ${provider.bg}
                  disabled:opacity-50 disabled:cursor-not-allowed`}>
                {provider.icon}
                <span>{provider.name}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-400 uppercase tracking-wider">
                or continue with email
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {!isLogin && (
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3
                    text-sm focus:outline-none focus:border-cn-orange focus:ring-2 focus:ring-cn-orange/10
                    transition-all"
                />
              </div>
            )}

            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3
                  text-sm focus:outline-none focus:border-cn-orange focus:ring-2 focus:ring-cn-orange/10
                  transition-all"
              />
            </div>

            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-11 py-3
                  text-sm focus:outline-none focus:border-cn-orange focus:ring-2 focus:ring-cn-orange/10
                  transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-xs text-cn-orange hover:text-cn-orange-hover font-medium">
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cn-orange hover:bg-cn-orange-hover text-white font-semibold
                py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2
                shadow-lg shadow-cn-orange/20 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "Log In" : "Create Account"}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Toggle */}
          <p className="text-center text-sm text-gray-500 mt-5">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setAuthMode(isLogin ? "register" : "login")}
              className="text-cn-orange hover:text-cn-orange-hover font-semibold">
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AuthModal;
