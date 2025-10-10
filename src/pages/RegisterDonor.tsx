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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { indianStates, citiesByState } from "@/utils/indianLocations";

const RegisterDonor = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
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
                  <Heart className="w-8 h-8" />
                  <h2 className="text-3xl font-bold">Become a Blood Donor</h2>
                </div>
                <p className="text-white/90">
                  Join our community of life-savers and make a difference
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="h-12"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-12"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="h-12"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bloodType">Blood Type *</Label>
                      <Select
                        value={formData.bloodType}
                        onValueChange={(value) => setFormData({ ...formData, bloodType: value })}
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
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        className="h-12"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Address</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      placeholder="Enter your address"
                      className="h-12"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) => setFormData({ ...formData, city: value })}
                        disabled={!formData.state}
                      >
                        <SelectTrigger id="city" className="h-12">
                          <SelectValue placeholder={formData.state ? "Select city" : "Select state first"} />
                        </SelectTrigger>
                        <SelectContent className="max-h-60 bg-card">
                          {formData.state && citiesByState[formData.state]?.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) => setFormData({ ...formData, state: value, city: "" })}
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
                      <Label htmlFor="pincode">Pincode *</Label>
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
                    className="w-full shadow-blood text-lg font-semibold"
                    disabled={!isFormValid()}
                  >
                    Register as Donor
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
