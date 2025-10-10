import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Bot, Send } from "lucide-react";

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your blood donation assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I can help you with blood donation queries, find donors, or provide information about the donation process. What would you like to know?" 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <BackButton />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10 min-h-[calc(100vh-5rem)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Bot className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                AI Assistant
              </h1>
              <p className="text-lg text-muted-foreground">
                Ask me anything about blood donation
              </p>
            </div>

            <Card className="shadow-elevated h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle>Chat with AI Assistant</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        msg.role === "user"
                          ? "bg-primary text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button onClick={handleSend} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIAssistant;
