import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import InteractiveMythsFacts from "@/components/InteractiveMythsFacts";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ImpactStats />
        <InteractiveMythsFacts />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
