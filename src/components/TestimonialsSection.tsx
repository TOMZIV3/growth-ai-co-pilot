import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Solo Founder",
      company: "TaskFlow",
      content: "I was stuck at 12 users for 3 months. GrowthGenius gave me a clear Reddit strategy and I hit 500 users in 6 weeks. The AI knew exactly which communities to target.",
      avatar: "SC",
      growth: "+4,067% users"
    },
    {
      name: "Marcus Rodriguez",
      role: "Indie Hacker", 
      company: "CodeSnap",
      content: "Finally, someone who tells me EXACTLY what to do instead of generic advice. The LinkedIn strategy alone brought me 50 qualified leads in 2 weeks.",
      avatar: "MR",
      growth: "+200 leads"
    },
    {
      name: "Emily Foster",
      role: "Product Manager",
      company: "MindfulSpace",
      content: "The AI found communities I never knew existed. Posted in 3 niche subreddits and got featured on Product Hunt. Best $49 I've ever spent.",
      avatar: "EF",
      growth: "Featured on PH"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-success/20 text-success">
            Real Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Founders getting real traction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are real stories from founders who went from "stuck" to "scaling" with AI-powered growth strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary hover:-translate-y-1">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                {/* Growth badge */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      {testimonial.growth}
                    </Badge>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <strong>Join 500+ founders</strong> who've turned confusion into consistent growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;