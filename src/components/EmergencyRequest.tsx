import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { AlertCircle, Phone, MapPin } from "lucide-react";
import { useState, KeyboardEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { indianStates, citiesByState } from "@/utils/indianLocations";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface EmergencyRequestProps {
  onSuccess?: () => void;
}

const EmergencyRequest = ({ onSuccess }: EmergencyRequestProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useLanguage();
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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, nextFieldId?: string) => {
    if (e.key === "Enter" && nextFieldId) {
      e.preventDefault();
      const nextField = document.getElementById(nextFieldId);
      nextField?.focus();
    }
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
              <h2 className="text-2xl sm:text-3xl font-bold">{t("title.emergencyRequest")}</h2>
            </div>
            <p className="text-white/90 text-sm sm:text-base">
              {t("title.emergencyDesc")}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Blood Type & Units */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bloodType" className="text-sm font-semibold">
                  {t("form.bloodType")} *
                </Label>
                <Select
                  value={formData.bloodType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, bloodType: value })
                  }
                >
                  <SelectTrigger id="bloodType" className="h-12">
                    <SelectValue placeholder={t("form.selectBloodType")} />
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
                  {t("form.units")} *
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
                  onKeyDown={(e) => handleKeyDown(e, "patientName")}
                />
              </div>
            </div>

            {/* Patient Name */}
            <div className="space-y-2">
              <Label htmlFor="patientName" className="text-sm font-semibold">
                {t("form.patientName")} *
              </Label>
              <Input
                id="patientName"
                placeholder="Enter patient's full name"
                className="h-12"
                value={formData.patientName}
                onChange={(e) =>
                  setFormData({ ...formData, patientName: e.target.value })
                }
                onKeyDown={(e) => handleKeyDown(e, "hospitalName")}
              />
            </div>

            {/* Hospital Name */}
            <div className="space-y-2">
              <Label htmlFor="hospitalName" className="text-sm font-semibold">
                {t("form.hospitalName")} *
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
                  onKeyDown={(e) => handleKeyDown(e, "contactNumber")}
                />
              </div>
            </div>

            {/* Contact Number */}
            <div className="space-y-2">
              <Label htmlFor="contactNumber" className="text-sm font-semibold">
                {t("form.contactNumber")} *
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
                  onKeyDown={(e) => handleKeyDown(e, "state")}
                />
              </div>
            </div>

            {/* State & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="state" className="text-sm font-semibold">
                  {t("form.state")} *
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value, city: "" })
                  }
                >
                  <SelectTrigger id="state" className="h-12">
                    <SelectValue placeholder={t("form.selectState")} />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 bg-card z-50">
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
                  {t("form.city")} *
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
                      placeholder={formData.state ? t("form.selectCity") : t("form.selectStateFirst")}
                    />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 bg-card z-50">
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
                className="w-full pulse-urgent shadow-blood text-base sm:text-lg font-semibold"
                disabled={!isFormValid()}
              >
                {t("form.submit")}
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground text-center mt-4">
                {t("form.responseTime")}
              </p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyRequest;
