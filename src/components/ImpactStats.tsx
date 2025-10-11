import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Droplet, Users, Heart, TrendingUp } from "lucide-react";
import iconBlood from "@/assets/icon-blood.png";
import iconPlatelet from "@/assets/icon-platelet.png";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  color: "red" | "cyan";
}

const StatCard = ({ icon, value, label, suffix = "", delay, color }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <Card
      className={`relative overflow-hidden p-8 transition-all duration-300 hover:scale-105 cursor-pointer group animate-scale-in shadow-elevated ${
        color === "red" ? "hover:shadow-blood" : "hover:shadow-cyan"
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setCount(value)}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          color === "red" ? "gradient-blood" : "gradient-cyan"
        }`}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`p-3 rounded-xl ${
              color === "red" ? "bg-primary/10" : "bg-secondary/10"
            } group-hover:bg-white/20 transition-colors`}
          >
            {icon}
          </div>
          <TrendingUp
            className={`w-5 h-5 ${
              color === "red" ? "text-primary" : "text-secondary"
            } group-hover:text-white transition-colors`}
          />
        </div>

        <div className="space-y-2">
          <div
            className={`text-5xl font-bold ${
              color === "red" ? "text-primary" : "text-secondary"
            } group-hover:text-white transition-colors`}
          >
            {count.toLocaleString()}
            {suffix}
          </div>
          <div className="text-sm font-medium text-muted-foreground group-hover:text-white/90 transition-colors">
            {label}
          </div>
        </div>

        {/* Progress Ring */}
        <div className="mt-6">
          <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                color === "red" ? "bg-primary" : "bg-secondary"
              }`}
              style={{
                width: `${(count / value) * 100}%`,
                transitionDelay: `${delay}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

const ImpactStats = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Impact Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time metrics of lives we're touching together
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Droplet className="w-8 h-8 text-primary" />}
            value={25000}
            label="Blood Units Collected"
            delay={0}
            color="red"
          />
          <StatCard
            icon={<img src={iconPlatelet} alt="Platelet" className="w-8 h-8" />}
            value={542}
            label="Platelet Donations"
            delay={100}
            color="cyan"
          />
          <StatCard
            icon={<Users className="w-8 h-8 text-secondary" />}
            value={3500}
            label="Active Donors"
            suffix="+"
            delay={200}
            color="cyan"
          />
          <StatCard
            icon={<Heart className="w-8 h-8 text-primary" />}
            value={5214}
            label="Lives Saved"
            suffix="+"
            delay={300}
            color="red"
          />
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-8 bg-card shadow-elevated">
            <div className="flex items-start gap-4">
              <img src={iconBlood} alt="Blood donation" className="w-16 h-16" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Blood Donation</h3>
                <p className="text-muted-foreground mb-4">
                  One blood donation can save up to 3 lives. Join our community of
                  heroes today.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="font-medium">42 Active Requests</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card shadow-elevated">
            <div className="flex items-start gap-4">
              <img src={iconPlatelet} alt="Platelet donation" className="w-16 h-16" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Platelet (SDP) Donation</h3>
                <p className="text-muted-foreground mb-4">
                  Critical for cancer patients and surgical cases. Your platelets can
                  make miracles happen.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                    <span className="font-medium">18 Active Requests</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
