import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import EmergencyRequest from "@/components/EmergencyRequest";
import ChatBot from "@/components/ChatBot";

const RequestBlood = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-20">
        <EmergencyRequest />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default RequestBlood;
