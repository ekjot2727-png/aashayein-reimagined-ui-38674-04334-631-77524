import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Blood Donation Camp 2025",
      description: "Community blood donation drive",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800",
    },
    {
      id: 2,
      title: "Happy Donors",
      description: "Our valued donors making a difference",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800",
    },
    {
      id: 3,
      title: "Medical Team",
      description: "Professional healthcare support",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
    },
    {
      id: 4,
      title: "Blood Collection",
      description: "Safe and hygienic collection process",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    },
    {
      id: 5,
      title: "Donor Appreciation",
      description: "Celebrating our life-savers",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800",
    },
    {
      id: 6,
      title: "Community Event",
      description: "Bringing people together for a cause",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Blood Recipient",
      testimonial: "Thanks to Aashayein, I received blood within hours during my emergency. The platform saved my life!",
      bloodType: "A+",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Regular Donor",
      testimonial: "Donating blood through Aashayein has been the most rewarding experience. Knowing I've helped save lives gives me immense satisfaction.",
      bloodType: "O+",
    },
    {
      id: 3,
      name: "Dr. Anjali Verma",
      role: "Hematologist",
      testimonial: "Aashayein has revolutionized how we connect with donors. The platform is efficient, reliable, and truly life-saving.",
      bloodType: "B+",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Gallery
              </h1>
              <p className="text-lg text-muted-foreground">
                Moments of compassion and life-saving actions
              </p>
            </div>

            {/* Photo Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {galleryImages.map((item) => (
                <Card key={item.id} className="shadow-elevated hover:shadow-lg transition-all duration-300 hover-scale overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonials Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stories That Inspire
                </h2>
                <p className="text-lg text-muted-foreground">
                  Hear from donors and recipients who have experienced the impact of blood donation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item) => (
                  <Card key={item.id} className="shadow-elevated hover:shadow-lg transition-all duration-300 p-6">
                    <div className="mb-4">
                      <Quote className="w-10 h-10 text-primary opacity-30" />
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{item.testimonial}"
                    </p>
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                      </div>
                      <Badge variant="outline" className="text-primary border-primary">
                        {item.bloodType}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
