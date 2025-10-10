import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ChatBot from "@/components/ChatBot";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-primary">Support Our Mission</h1>
            <p className="text-lg text-muted-foreground">
              Your donation helps us save lives and organize blood donation camps
            </p>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Make a Donation</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Bank Transfer</h3>
                <p className="text-muted-foreground mb-1">Account Name: Aashayein Foundation</p>
                <p className="text-muted-foreground mb-1">Account Number: XXXX XXXX XXXX</p>
                <p className="text-muted-foreground">IFSC Code: XXXXX0000</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">UPI Payment</h3>
                <p className="text-muted-foreground">UPI ID: aashayein@upi</p>
              </div>

              <Button className="w-full" size="lg">
                Donate Now
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Donate;
