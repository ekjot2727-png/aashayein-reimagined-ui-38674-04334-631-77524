import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Droplet, Award, User, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportToPDF, exportToCSV } from "@/utils/exportHelpers";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const DonorDashboard = () => {
  const { t } = useLanguage();
  const donorInfo = {
    name: "John Doe",
    bloodType: "A+",
    totalDonations: 12,
    lastDonation: "2025-08-15",
    nextEligible: "2025-11-15",
  };

  const donationHistory = [
    { id: 1, date: "2025-08-15", location: "City Hospital", type: "Whole Blood", status: "Completed" },
    { id: 2, date: "2025-05-10", location: "Blood Bank Center", type: "Platelets", status: "Completed" },
    { id: 3, date: "2025-02-20", location: "Community Camp", type: "Whole Blood", status: "Completed" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Donor Dashboard
              </h1>
              <p className="text-lg text-muted-foreground">
                Track your donation journey and impact
              </p>
            </div>

            {/* Profile Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-elevated hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                  <Droplet className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{donorInfo.totalDonations}</div>
                  <p className="text-xs text-muted-foreground">Lives impacted: {donorInfo.totalDonations * 3}</p>
                </CardContent>
              </Card>

              <Card className="shadow-elevated hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-br from-secondary/5 to-transparent">
                  <CardTitle className="text-sm font-medium">Blood Type</CardTitle>
                  <User className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{donorInfo.bloodType}</div>
                  <p className="text-xs text-muted-foreground">Universal Donor</p>
                </CardContent>
              </Card>

              <Card className="shadow-elevated hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-br from-accent/5 to-transparent">
                  <CardTitle className="text-sm font-medium">Last Donation</CardTitle>
                  <Calendar className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{new Date(donorInfo.lastDonation).toLocaleDateString()}</div>
                  <p className="text-xs text-muted-foreground">3 months ago</p>
                </CardContent>
              </Card>

              <Card className="shadow-elevated hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-br from-success/5 to-transparent">
                  <CardTitle className="text-sm font-medium">Achievement</CardTitle>
                  <Award className="h-5 w-5 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-success">Gold</div>
                  <p className="text-xs text-muted-foreground">10+ donations</p>
                </CardContent>
              </Card>
            </div>

            {/* Donation History */}
            <Card className="shadow-elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Donation History</CardTitle>
                    <CardDescription>Your complete donation record</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        exportToPDF(donationHistory, donorInfo.name, donorInfo.bloodType);
                        toast.success("PDF exported successfully!");
                      }}
                      className="focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Export PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        exportToCSV(donationHistory);
                        toast.success("CSV exported successfully!");
                      }}
                      className="focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donationHistory.map((donation) => (
                    <div
                      key={donation.id}
                      className="flex items-center justify-between p-4 border-2 rounded-lg hover:bg-muted/50 hover:border-primary/20 transition-all focus-within:ring-2 focus-within:ring-accent"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Droplet className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{donation.location}</p>
                          <p className="text-sm text-muted-foreground">{donation.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{new Date(donation.date).toLocaleDateString()}</p>
                        <Badge variant="default" className="mt-1">{donation.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DonorDashboard;
