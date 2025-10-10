import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aashayein-logo-new.png";
import jecrcLogo from "@/assets/jecrc-logo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
    { name: "Donate", path: "/donate" },
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
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth relative group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-smooth ${
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              size="default"
              asChild
              className="pulse-urgent shadow-blood font-semibold"
            >
              <Link to="/request">URGENT: Blood Request</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button variant="outline" size="default" asChild className="w-full">
                  <Link to="/register">Register as Donor</Link>
                </Button>
                <Button size="default" asChild className="w-full pulse-urgent">
                  <Link to="/request">Request Blood/SDP</Link>
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
