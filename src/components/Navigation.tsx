import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Heart, UserPlus } from "lucide-react";
import logo from "@/assets/aashayein-logo-new.webp";
import jecrcLogo from "@/assets/jecrc-logo-new.webp";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
    { name: t("nav.donate"), path: "/donate" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-sunrise-gold/40 via-sunrise-gold/20 to-sunrise-gold/40 backdrop-blur-lg shadow-elegant border-b border-sunrise-gold/50"
          : "bg-gradient-to-r from-sunrise-gold/30 via-sunrise-gold/15 to-sunrise-gold/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logos */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Aashayein - The Life Saviours" 
              className="h-14 w-auto object-contain group-hover:scale-105 transition-smooth drop-shadow-lg"
            />
            <img 
              src={jecrcLogo} 
              alt="JECRC - Nurturing Talent" 
              className="h-14 w-auto object-contain group-hover:scale-105 transition-smooth drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-smooth relative group ${
                  location.pathname === link.path
                    ? "text-[hsl(var(--sunrise-gold))] drop-shadow-[0_0_8px_rgba(249,168,38,0.6)]"
                    : "text-[hsl(var(--sunrise-gold))] hover:text-[hsl(var(--sunrise-gold))] hover:drop-shadow-[0_0_12px_rgba(249,168,38,0.8)]"
                }`}
                style={{ textShadow: location.pathname === link.path ? '0 0 10px rgba(249, 168, 38, 0.5)' : '' }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[hsl(var(--sunrise-gold))] shadow-glow transition-smooth ${
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button & Settings */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <Button
              size="default"
              asChild
              className="pulse-urgent shadow-blood font-semibold focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Link to="/request" className="flex items-center">
                <Heart className="mr-2 w-4 h-4" />
                {t("nav.urgent")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button & Settings */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <button
              className="p-2 text-[hsl(var(--sunrise-gold))] drop-shadow-[0_0_8px_rgba(249,168,38,0.6)] focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-2 ${
                    location.pathname === link.path
                      ? "text-[hsl(var(--sunrise-gold))] drop-shadow-[0_0_8px_rgba(249,168,38,0.6)]"
                      : "text-[hsl(var(--sunrise-gold))]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button variant="outline" size="default" asChild className="w-full">
                  <Link to="/register" className="flex items-center justify-center">
                    <UserPlus className="mr-2 w-4 h-4" />
                    {t("nav.register")}
                  </Link>
                </Button>
                <Button size="default" asChild className="w-full pulse-urgent">
                  <Link to="/request" className="flex items-center justify-center">
                    <Heart className="mr-2 w-4 h-4" />
                    {t("nav.requestBlood")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
