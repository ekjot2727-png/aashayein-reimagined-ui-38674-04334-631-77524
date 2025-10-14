import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary" />
              <div>
                <div className="font-bold text-xl">{t("footer.brand")}</div>
                <div className="text-xs text-gray-400">{t("footer.tagline")}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("footer.description")}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-primary rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Dashboard", path: "/dashboard" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/request"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Request Blood/SDP
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Register as Donor
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Find Blood Banks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Emergency Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1">24/7 Helpline</div>
                  <a href="tel:+911234567890" className="text-gray-400 hover:text-white text-sm">
                    +91 123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1">Email</div>
                  <a href="mailto:aashayein@jecrc.ac.in" className="text-gray-400 hover:text-white text-sm">
                    aashayein@jecrc.ac.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1">Address</div>
                  <p className="text-gray-400 text-sm">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} Aashayein: The Life Saviours. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
