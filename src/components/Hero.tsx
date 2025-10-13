import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Heart, Activity } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Life-saving blood donation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy-base/90 to-navy-deep/95 dark:from-navy-ultra/98 dark:via-navy-deep/95 dark:to-navy-ultra/98" />
      </div>

      {/* Animated Elements - Enhanced Heartbeat */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
        <div className="animate-fade-in space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-primary/10 border border-primary/20">
            <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wide">
              {t("hero.badge")}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-none px-4">
            <span className="inline-block animate-fade-in">{t("hero.connecting")}</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t("hero.delivering")}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto font-light leading-relaxed px-4">
            {t("hero.subtitle")}
            <br />
            {t("hero.subtitle2")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-24 px-4">
            <Button
              size="lg"
              asChild
              className="pulse-urgent shadow-blood text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-7 font-semibold group rounded-full w-full sm:w-auto"
            >
              <Link to="/request" className="flex items-center justify-center">
                <Heart className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                {t("hero.requestUrgent")}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-7 font-semibold bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy-deep group rounded-full backdrop-blur-sm w-full sm:w-auto"
            >
              <Link to="/register" className="flex items-center justify-center">
                <Activity className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                {t("hero.becomeDonor")}
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 max-w-5xl mx-auto px-4">
            {[
              { value: "25,000+", label: t("hero.unitsLabel") },
              { value: "3,500+", label: t("hero.donorsLabel") },
              { value: "5,214+", label: t("hero.livesLabel") },
              { value: "24/7", label: t("hero.supportLabel") },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-light tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
