import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "cn_auth_user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // "login" | "register"

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const login = (userData) => {
    const u = {
      id: Date.now(),
      name: userData.name || userData.email.split("@")[0],
      email: userData.email,
      avatar: (userData.name || userData.email)[0].toUpperCase(),
      provider: userData.provider || "email",
      joinedAt: new Date().toISOString(),
    };
    setUser(u);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setShowAuthModal(false);
  };

  const socialLogin = (provider) => {
    // Simulate social login
    const providers = {
      google: { name: "Google User", email: "user@gmail.com" },
      github: { name: "GitHub User", email: "user@github.com" },
      facebook: { name: "Facebook User", email: "user@facebook.com" },
      linkedin: { name: "LinkedIn User", email: "user@linkedin.com" },
    };
    const data = providers[provider] || providers.google;
    login({ ...data, provider });
  };

  const register = (userData) => {
    login({ ...userData, provider: "email" });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const openLogin = () => {
    setAuthMode("login");
    setShowAuthModal(true);
  };

  const openRegister = () => {
    setAuthMode("register");
    setShowAuthModal(true);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn: !!user,
      login,
      register,
      socialLogin,
      logout,
      showAuthModal,
      setShowAuthModal,
      authMode,
      setAuthMode,
      openLogin,
      openRegister,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
