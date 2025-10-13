import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ChatBot from "@/components/ChatBot";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart } from "lucide-react";
import { useState, KeyboardEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { indianStates, citiesByState } from "@/utils/indianLocations";
import { useLanguage } from "@/contexts/LanguageContext";

const RegisterDonor = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodType: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const isFormValid = () => {
    return (
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.bloodType &&
      formData.dateOfBirth &&
      formData.address.trim() &&
      formData.city &&
      formData.state &&
      formData.pincode.trim()
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
      title: "Registration Successful!",
      description: "Welcome to the Aashayein family.",
    });
    navigate("/donor-dashboard");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-elevated border-2 border-primary/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl font-bold">{t("title.becomeDonor")}</h2>
                </div>
                <p className="text-white/90 text-sm sm:text-base">
                  {t("title.becomeDonorDesc")}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{t("form.personalInfo")}</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t("form.fullName")} *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="h-12"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      onKeyDown={(e) => handleKeyDown(e, "email")}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("form.email")} *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-12"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onKeyDown={(e) => handleKeyDown(e, "phone")}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("form.phone")} *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="h-12"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onKeyDown={(e) => handleKeyDown(e, "bloodType")}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bloodType">{t("form.bloodType")} *</Label>
                      <Select
                        value={formData.bloodType}
                        onValueChange={(value) => setFormData({ ...formData, bloodType: value })}
                      >
                        <SelectTrigger id="bloodType" className="h-12">
                          <SelectValue placeholder={t("form.selectBloodType")} />
                        </SelectTrigger>
                        <SelectContent className="bg-card z-50">
                          {bloodTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">{t("form.dob")} *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        className="h-12"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        onKeyDown={(e) => handleKeyDown(e, "address")}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold">{t("form.addressInfo")}</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">{t("form.address")} *</Label>
                    <Input
                      id="address"
                      placeholder="Enter your address"
                      className="h-12"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      onKeyDown={(e) => handleKeyDown(e, "state")}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="state">{t("form.state")} *</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) => setFormData({ ...formData, state: value, city: "" })}
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
                      <Label htmlFor="city">{t("form.city")} *</Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) => setFormData({ ...formData, city: value })}
                        disabled={!formData.state}
                      >
                        <SelectTrigger id="city" className="h-12">
                          <SelectValue placeholder={formData.state ? t("form.selectCity") : t("form.selectStateFirst")} />
                        </SelectTrigger>
                        <SelectContent className="max-h-60 bg-card z-50">
                          {formData.state && citiesByState[formData.state]?.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pincode">{t("form.pincode")} *</Label>
                      <Input
                        id="pincode"
                        placeholder="110001"
                        className="h-12"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-blood text-base sm:text-lg font-semibold"
                    disabled={!isFormValid()}
                  >
                    {t("form.registerDonor")}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default RegisterDonor;
