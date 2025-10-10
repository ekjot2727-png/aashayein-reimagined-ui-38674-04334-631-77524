import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import EmergencyRequest from "@/components/EmergencyRequest";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RequestBlood = () => {
  const [showTracker, setShowTracker] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-20">
        <EmergencyRequest onSuccess={() => setShowTracker(true)} />
        {showTracker && (
          <div className="max-w-2xl mx-auto px-4 py-8 text-center">
            <Button size="lg" asChild>
              <Link to="/tracker">Find a Blood Donation Camp</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default RequestBlood;
