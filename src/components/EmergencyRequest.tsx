import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { AlertCircle, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { indianStates, citiesByState } from "@/utils/indianLocations";
import { useNavigate } from "react-router-dom";

interface EmergencyRequestProps {
  onSuccess?: () => void;
}

const EmergencyRequest = ({ onSuccess }: EmergencyRequestProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bloodType: "",
    units: "",
    patientName: "",
    hospitalName: "",
    contactNumber: "",
    state: "",
    city: "",
  });

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const isFormValid = () => {
    return (
      formData.bloodType &&
      formData.units &&
      formData.patientName.trim() &&
      formData.hospitalName.trim() &&
      formData.contactNumber.trim() &&
      formData.state &&
      formData.city
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Emergency Request Submitted",
      description: "Our team will contact you within 15 minutes.",
    });
    if (onSuccess) {
      onSuccess();
    }
    navigate("/tracker");
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-elevated border-2 border-primary/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-8 h-8 animate-pulse" />
              <h2 className="text-3xl font-bold">Emergency Blood/SDP Request</h2>
            </div>
            <p className="text-white/90">
              Submit your urgent request and we'll connect you with donors immediately
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Blood Type & Units */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bloodType" className="text-sm font-semibold">
                  Blood Type Required *
                </Label>
                <Select
                  value={formData.bloodType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, bloodType: value })
                  }
                >
                  <SelectTrigger id="bloodType" className="h-12">
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="units" className="text-sm font-semibold">
                  Units Required *
                </Label>
                <Input
                  id="units"
                  type="number"
                  placeholder="e.g., 2"
                  min="1"
                  className="h-12"
                  value={formData.units}
                  onChange={(e) =>
                    setFormData({ ...formData, units: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Patient Name */}
            <div className="space-y-2">
              <Label htmlFor="patientName" className="text-sm font-semibold">
                Patient Name *
              </Label>
              <Input
                id="patientName"
                placeholder="Enter patient's full name"
                className="h-12"
                value={formData.patientName}
                onChange={(e) =>
                  setFormData({ ...formData, patientName: e.target.value })
                }
              />
            </div>

            {/* Hospital Name */}
            <div className="space-y-2">
              <Label htmlFor="hospitalName" className="text-sm font-semibold">
                Hospital Name *
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="hospitalName"
                  placeholder="Enter hospital name"
                  className="h-12 pl-10"
                  value={formData.hospitalName}
                  onChange={(e) =>
                    setFormData({ ...formData, hospitalName: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Contact Number */}
            <div className="space-y-2">
              <Label htmlFor="contactNumber" className="text-sm font-semibold">
                Contact Number *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="h-12 pl-10"
                  value={formData.contactNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, contactNumber: e.target.value })
                  }
                />
              </div>
            </div>

            {/* State & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="state" className="text-sm font-semibold">
                  State *
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value, city: "" })
                  }
                >
                  <SelectTrigger id="state" className="h-12">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 bg-card">
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-semibold">
                  City *
                </Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                  disabled={!formData.state}
                >
                  <SelectTrigger id="city" className="h-12">
                    <SelectValue
                      placeholder={formData.state ? "Select city" : "Select state first"}
                    />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 bg-card">
                    {formData.state &&
                      citiesByState[formData.state]?.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full pulse-urgent shadow-blood text-lg font-semibold"
                disabled={!isFormValid()}
              >
                Submit Emergency Request
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Our team responds within 15 minutes • Available 24/7
              </p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyRequest;
