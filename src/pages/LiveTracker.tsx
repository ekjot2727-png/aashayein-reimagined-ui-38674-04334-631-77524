import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveMap from "@/components/InteractiveMap";
import VerifiedBadge from "@/components/VerifiedBadge";
import CopyableContact from "@/components/CopyableContact";

const LiveTracker = () => {
  const donors = [
    { id: 1, name: "Rajesh Kumar", bloodType: "A+", distance: "1.2 km", phone: "+91 98765 43210", available: true, lat: 28.6139, lng: 77.2090 },
    { id: 2, name: "Priya Sharma", bloodType: "O+", distance: "2.5 km", phone: "+91 98765 43211", available: true, lat: 28.6129, lng: 77.2295 },
    { id: 3, name: "Amit Verma", bloodType: "B+", distance: "3.8 km", phone: "+91 98765 43212", available: true, lat: 28.7041, lng: 77.1025 },
    { id: 4, name: "Sneha Patel", bloodType: "AB+", distance: "4.2 km", phone: "+91 98765 43213", available: false, lat: 28.5355, lng: 77.3910 },
    { id: 5, name: "Vikram Singh", bloodType: "A-", distance: "5.1 km", phone: "+91 98765 43214", available: true, lat: 28.4595, lng: 77.0266 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Live Blood Donor Tracker
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find available blood donors near you in real-time
              </p>
            </div>

            {/* Interactive Map */}
            <div className="mb-8">
              <InteractiveMap donors={donors} />
            </div>

            {/* Donors List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {donors.map((donor) => (
                <Card key={donor.id} className="shadow-elevated hover:shadow-lg transition-all duration-300 hover-scale">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{donor.name}</CardTitle>
                          <VerifiedBadge verified={donor.available} donationCount={5} />
                        </div>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <MapPin className="w-4 h-4" />
                          {donor.distance} away
                        </CardDescription>
                      </div>
                      <Badge variant={donor.available ? "default" : "secondary"}>
                        {donor.available ? "Available" : "Unavailable"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Droplet className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-lg">{donor.bloodType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <CopyableContact text={donor.phone} type="phone" />
                    </div>
                    {donor.available && (
                      <Button className="w-full" size="sm">
                        Contact Donor
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LiveTracker;
