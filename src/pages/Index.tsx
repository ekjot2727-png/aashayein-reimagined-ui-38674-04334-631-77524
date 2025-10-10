import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import MythsFacts from "@/components/MythsFacts";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ImpactStats />
        <MythsFacts />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
