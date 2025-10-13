import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact Us",
    "nav.donate": "Donate",
    "nav.urgent": "URGENT: Blood Request",
    "nav.register": "Register as Donor",
    "nav.requestBlood": "Request Blood/SDP",
    
    // Hero
    "hero.connecting": "Connecting Saviours.",
    "hero.delivering": "Delivering Hope.",
    "hero.subtitle": "Join India's most trusted blood donation network.",
    "hero.subtitle2": "Every donation saves up to 3 lives.",
    "hero.requestUrgent": "Request Blood Urgently",
    "hero.becomeDonor": "Become a Donor",
    "hero.unitsLabel": "Units Donated",
    "hero.donorsLabel": "Active Donors",
    "hero.livesLabel": "Lives Saved",
    "hero.supportLabel": "Support",
    "hero.badge": "24/7 Emergency Response Active",
    
    // Forms
    "form.bloodType": "Blood Type Required",
    "form.units": "Units Required",
    "form.patientName": "Patient Name",
    "form.hospitalName": "Hospital Name",
    "form.contactNumber": "Contact Number",
    "form.state": "State",
    "form.city": "City",
    "form.selectBloodType": "Select blood type",
    "form.selectState": "Select state",
    "form.selectCity": "Select city",
    "form.selectStateFirst": "Select state first",
    "form.submit": "Submit Emergency Request",
    "form.responseTime": "Our team responds within 15 minutes • Available 24/7",
    "form.fullName": "Full Name",
    "form.email": "Email",
    "form.phone": "Phone Number",
    "form.dob": "Date of Birth",
    "form.address": "Street Address",
    "form.pincode": "Pincode",
    "form.registerDonor": "Register as Donor",
    "form.personalInfo": "Personal Information",
    "form.addressInfo": "Address",
    
    // Titles
    "title.emergencyRequest": "Emergency Blood/SDP Request",
    "title.emergencyDesc": "Submit your urgent request and we'll connect you with donors immediately",
    "title.becomeDonor": "Become a Blood Donor",
    "title.becomeDonorDesc": "Join our community of life-savers and make a difference",
  },
  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.gallery": "गैलरी",
    "nav.contact": "संपर्क करें",
    "nav.donate": "दान करें",
    "nav.urgent": "तत्काल: रक्त अनुरोध",
    "nav.register": "दाता के रूप में पंजीकरण करें",
    "nav.requestBlood": "रक्त/SDP का अनुरोध करें",
    
    // Hero
    "hero.connecting": "जीवनदाताओं को जोड़ना।",
    "hero.delivering": "आशा प्रदान करना।",
    "hero.subtitle": "भारत के सबसे विश्वसनीय रक्तदान नेटवर्क में शामिल हों।",
    "hero.subtitle2": "प्रत्येक दान 3 जीवन तक बचाता है।",
    "hero.requestUrgent": "तुरंत रक्त का अनुरोध करें",
    "hero.becomeDonor": "दाता बनें",
    "hero.unitsLabel": "दान की गई इकाइयाँ",
    "hero.donorsLabel": "सक्रिय दाता",
    "hero.livesLabel": "बचाई गई जिंदगियां",
    "hero.supportLabel": "सहायता",
    "hero.badge": "24/7 आपातकालीन प्रतिक्रिया सक्रिय",
    
    // Forms
    "form.bloodType": "आवश्यक रक्त समूह",
    "form.units": "आवश्यक इकाइयाँ",
    "form.patientName": "रोगी का नाम",
    "form.hospitalName": "अस्पताल का नाम",
    "form.contactNumber": "संपर्क नंबर",
    "form.state": "राज्य",
    "form.city": "शहर",
    "form.selectBloodType": "रक्त समूह चुनें",
    "form.selectState": "राज्य चुनें",
    "form.selectCity": "शहर चुनें",
    "form.selectStateFirst": "पहले राज्य चुनें",
    "form.submit": "आपातकालीन अनुरोध सबमिट करें",
    "form.responseTime": "हमारी टीम 15 मिनट में जवाब देती है • 24/7 उपलब्ध",
    "form.fullName": "पूरा नाम",
    "form.email": "ईमेल",
    "form.phone": "फोन नंबर",
    "form.dob": "जन्म तिथि",
    "form.address": "पता",
    "form.pincode": "पिनकोड",
    "form.registerDonor": "दाता के रूप में पंजीकरण करें",
    "form.personalInfo": "व्यक्तिगत जानकारी",
    "form.addressInfo": "पता",
    
    // Titles
    "title.emergencyRequest": "आपातकालीन रक्त/SDP अनुरोध",
    "title.emergencyDesc": "अपना तत्काल अनुरोध सबमिट करें और हम आपको तुरंत दाताओं से जोड़ेंगे",
    "title.becomeDonor": "रक्तदाता बनें",
    "title.becomeDonorDesc": "जीवन बचाने वालों के हमारे समुदाय में शामिल हों और बदलाव लाएं",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
