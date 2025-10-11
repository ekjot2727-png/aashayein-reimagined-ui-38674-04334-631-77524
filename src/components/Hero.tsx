import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Heart, Activity } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Life-saving blood donation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy-base/90 to-navy-deep/95" />
      </div>

      {/* Animated Elements - Colorful Heartbeat */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-500/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-pink-500/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
        <div className="animate-fade-in space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary tracking-wide">
              24/7 Emergency Response Active
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
            <span className="inline-block animate-fade-in">Connecting Saviours.</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '200ms' }}>
              Delivering Hope.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Join India's most trusted blood donation network.
            <br />
            Every donation saves up to 3 lives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <Button
              size="lg"
              asChild
              className="pulse-urgent shadow-blood text-base px-10 py-7 font-semibold group rounded-full"
            >
              <Link to="/request" className="flex items-center">
                <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Request Blood Urgently
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-10 py-7 font-semibold bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy-deep group rounded-full backdrop-blur-sm"
            >
              <Link to="/register" className="flex items-center">
                <Activity className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Become a Donor
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {[
              { value: "25,000+", label: "Units Donated" },
              { value: "3,500+", label: "Active Donors" },
              { value: "5,214+", label: "Lives Saved" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-light tracking-wide uppercase">
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
