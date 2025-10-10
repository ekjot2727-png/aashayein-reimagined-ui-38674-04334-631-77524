import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
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
                About Aashayein
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The Life Saviours - Connecting donors with those in need, one drop at a time
              </p>
            </div>

            {/* Mission Section */}
            <Card className="shadow-elevated mb-12">
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Heart className="text-primary" />
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Aashayein is dedicated to saving lives by connecting blood donors with patients in need. 
                    We believe that every drop of blood donated is a gift of life, and our mission is to make 
                    this life-saving process as seamless and efficient as possible.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Through our innovative platform, we bridge the gap between willing donors and urgent medical 
                    needs, ensuring that no patient has to wait when time is critical. We are committed to building 
                    a community of compassionate individuals who understand the value of giving blood.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-elevated">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community First</h3>
                  <p className="text-muted-foreground">
                    Building a strong network of donors and recipients united by compassion
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elevated">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                  <p className="text-muted-foreground">
                    Ensuring rapid connection between donors and patients in emergency situations
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elevated">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    Maintaining the highest standards in blood donation coordination and support
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What We Do Section */}
            <Card className="shadow-elevated">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">What We Do</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Real-Time Donor Tracking</h3>
                      <p className="text-muted-foreground">
                        Our live tracker helps patients find available donors near them instantly, 
                        reducing wait times in critical situations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Emergency Blood Requests</h3>
                      <p className="text-muted-foreground">
                        24/7 emergency request system that connects urgent needs with willing donors 
                        within minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Donor Management</h3>
                      <p className="text-muted-foreground">
                        Comprehensive dashboard for donors to track their donation history, 
                        schedule appointments, and see their life-saving impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">AI-Powered Assistance</h3>
                      <p className="text-muted-foreground">
                        Smart assistant to answer questions about blood donation, eligibility, 
                        and help guide users through the process.
                      </p>
                    </div>
                  </div>
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

export default About;
