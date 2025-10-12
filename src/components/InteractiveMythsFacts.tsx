import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { XCircle, CheckCircle, Brain, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

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

const InteractiveMythsFacts = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const progress = (expandedItems.length / mythsFacts.length) * 100;
  const isComplete = expandedItems.length === mythsFacts.length;

  const handleValueChange = (value: string) => {
    if (value && !expandedItems.includes(value)) {
      setExpandedItems([...expandedItems, value]);
    }
  };

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

        {/* Progress Tracker */}
        {expandedItems.length > 0 && (
          <Card className="p-6 mb-8 animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                <span className="font-semibold">Knowledge Progress</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {expandedItems.length} of {mythsFacts.length} explored
              </span>
            </div>
            <Progress value={progress} className="h-2" />
            {isComplete && (
              <div className="mt-4 flex items-center gap-2 text-success animate-scale-in">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">
                  Congratulations! You've explored all myths!
                </span>
              </div>
            )}
          </Card>
        )}

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          onValueChange={handleValueChange}
        >
          {mythsFacts.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`border-2 border-border rounded-lg px-6 data-[state=open]:border-primary/30 transition-all shadow-sm hover:shadow-md ${
                expandedItems.includes(`item-${index}`)
                  ? "bg-primary/5"
                  : ""
              }`}
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-start gap-4 text-left">
                  <XCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
                  <div>
                    <div className="text-xs font-semibold text-primary uppercase mb-1">
                      MYTH #{index + 1}
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {item.myth}
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <div className="flex items-start gap-4 ml-10 animate-slide-up">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-success uppercase mb-2">
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
              className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1"
            >
              <CheckCircle className="w-4 h-4" />
              Call: +91 123 456 7890
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="mailto:aashayein@jecrc.ac.in"
              className="flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1"
            >
              <CheckCircle className="w-4 h-4" />
              Email: aashayein@jecrc.ac.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMythsFacts;
