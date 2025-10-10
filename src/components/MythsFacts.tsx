import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { XCircle, CheckCircle } from "lucide-react";

const mythsFacts = [
  {
    myth: "Donating blood weakens your immune system",
    fact: "Your body replaces donated blood within 24-48 hours. Blood donation actually stimulates new cell production, keeping your system healthy.",
  },
  {
    myth: "Blood donation is painful and takes hours",
    fact: "The actual donation takes only 10-15 minutes. You might feel a slight pinch, similar to a vaccine shot. The entire process, including registration, takes about 45 minutes.",
  },
  {
    myth: "I can't donate because I have a common blood type",
    fact: "Common blood types like O+ and A+ are in the highest demand because they're needed most frequently. Your donation is always valuable.",
  },
  {
    myth: "Vegetarians cannot donate blood",
    fact: "Diet doesn't affect your eligibility to donate blood. As long as you meet health requirements and maintain adequate iron levels, vegetarians can donate.",
  },
  {
    myth: "You need to be physically strong to donate",
    fact: "You only need to weigh 50kg or more and be in general good health. Physical strength has no impact on your ability to donate safely.",
  },
  {
    myth: "Blood donation causes weight gain",
    fact: "This is completely false. Blood donation has no effect on your weight or metabolism. Any temporary changes are due to fluids you consume during recovery.",
  },
];

const MythsFacts = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Myths vs. Facts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's clear up common misconceptions about blood donation
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {mythsFacts.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-border rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors shadow-sm hover:shadow-md"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-start gap-4 text-left">
                  <XCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-primary uppercase mb-1">
                      MYTH
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {item.myth}
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <div className="flex items-start gap-4 ml-10">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-secondary uppercase mb-2">
                      FACT
                    </div>
                    <div className="text-base text-muted-foreground leading-relaxed">
                      {item.fact}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? Our team is here to help 24/7
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              <CheckCircle className="w-4 h-4" />
              Call: +91 123 456 7890
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="mailto:help@aashayein.org"
              className="flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium"
            >
              <CheckCircle className="w-4 h-4" />
              Email: help@aashayein.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythsFacts;
