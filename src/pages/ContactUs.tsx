import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ChatBot from "@/components/ChatBot";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import CopyableContact from "@/components/CopyableContact";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help 24/7. Reach out to us anytime!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 shadow-elevated hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <CopyableContact text="aashayein@jecrc.ac.in" type="email" />
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-elevated hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <CopyableContact text="+91 1234567890" type="phone" />
                </div>
              </div>
            </Card>

            <Card className="p-8 md:col-span-2 shadow-elevated hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center p-6 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">
              For urgent blood requests, please use our{" "}
              <a
                href="/request"
                className="text-primary font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
              >
                Emergency Request Form
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ContactUs;
