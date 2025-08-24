import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Sparkles } from "lucide-react";
import WaitlistDialog from "./WaitlistDialog";

const CTASection = () => {
  const benefits = [
    "Get your personalized growth plan in 24 hours",
    "No more guessing which channels to use",
    "Weekly action plans with ready-to-use copy",
    "AI that adapts based on your results"
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary-glow mb-6">
              <Sparkles className="w-4 h-4" />
              Early Access - Limited Spots
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to turn your product into a 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> growth machine?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Stop wondering what to do next. Get your AI-powered growth plan and start seeing real traction within weeks, not months.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <WaitlistDialog>
              <Button variant="hero" size="xl" className="group">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </WaitlistDialog>
            <Button variant="outline" size="xl">
              See a Sample Plan
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['JD', 'SM', 'AL', 'KR'].map((initials, i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-xs text-primary-foreground border-2 border-background">
                    {initials}
                  </div>
                ))}
              </div>
              <span>500+ founders joined</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-success" />
              <span>Average setup: 5 minutes</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Launch: January 2025</span>
            </div>
          </div>
          
          {/* Urgency */}
          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl max-w-2xl mx-auto">
            <p className="text-primary-glow font-medium">
              <strong>Early birds get lifetime 50% off</strong> + 1-on-1 growth consultation with our team. 
              Only 100 spots left.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;