import { useState } from "react";
import { MapPin, Navigation, Droplet } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Donor {
  id: number;
  name: string;
  bloodType: string;
  distance: string;
  lat: number;
  lng: number;
  available: boolean;
}

interface InteractiveMapProps {
  donors: Donor[];
}

const InteractiveMap = ({ donors }: InteractiveMapProps) => {
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <Card className="overflow-hidden shadow-elevated">
      <div className="h-[500px] bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative">
        {/* Map Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px]" />
        
        {/* Location Button */}
        <Button
          onClick={getUserLocation}
          className="absolute top-4 right-4 z-10 rounded-full shadow-lg focus-visible:ring-2 focus-visible:ring-accent"
          size="icon"
        >
          <Navigation className="w-4 h-4" />
        </Button>

        {/* Donor Markers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl max-h-96">
            {donors.map((donor, index) => {
              const angle = (index / donors.length) * 2 * Math.PI;
              const radius = 120;
              const x = 50 + Math.cos(angle) * 30;
              const y = 50 + Math.sin(angle) * 30;

              return (
                <button
                  key={donor.id}
                  onClick={() => setSelectedDonor(donor)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus-visible:ring-2 focus-visible:ring-accent rounded-full"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={`Donor ${donor.name}, Blood type ${donor.bloodType}`}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full animate-ping ${donor.available ? 'bg-primary' : 'bg-muted'} opacity-20`} />
                    <MapPin
                      className={`w-8 h-8 ${donor.available ? 'text-primary' : 'text-muted-foreground'} drop-shadow-lg group-hover:scale-125 transition-transform`}
                      fill={donor.available ? 'currentColor' : 'none'}
                    />
                  </div>
                </button>
              );
            })}

            {/* User Location Marker */}
            {userLocation && (
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: '50%', top: '50%' }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full animate-pulse bg-accent opacity-30" />
                  <div className="w-4 h-4 rounded-full bg-accent border-2 border-white shadow-lg" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Donor Info Card */}
        {selectedDonor && (
          <Card className="absolute bottom-4 left-4 right-4 p-4 shadow-xl animate-scale-in">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg">{selectedDonor.name}</h3>
                  <Badge variant={selectedDonor.available ? "default" : "secondary"}>
                    {selectedDonor.available ? "Available" : "Unavailable"}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Droplet className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{selectedDonor.bloodType}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedDonor.distance} away</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedDonor(null)}
                className="focus-visible:ring-2 focus-visible:ring-accent"
              >
                ✕
              </Button>
            </div>
          </Card>
        )}
      </div>
    </Card>
  );
};

export default InteractiveMap;
