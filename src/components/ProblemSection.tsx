import { AlertCircle, HelpCircle, Clock, TrendingDown } from "lucide-react";
import beforeAfter from "@/assets/before-after.jpg";

const ProblemSection = () => {
  const problems = [
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "\"Now what?\"",
      description: "You've shipped your product but have no idea how to get your first 100 users."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time wasted on wrong channels",
      description: "You try Reddit, then LinkedIn, then TikTok—but nothing works because you don't have a strategy."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Burning money on ads",
      description: "You throw money at Facebook ads without knowing your audience, messaging, or timing."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Paralysis by analysis",
      description: "You read every marketing blog but still don't know what to do first, second, or third."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sound familiar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You're not alone. 73% of founders struggle with go-to-market strategy after building their product.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual */}
          <div className="relative">
            <img 
              src={beforeAfter} 
              alt="Before and after: confused founder vs clear AI-guided strategy"
              className="rounded-2xl shadow-2xl border border-border"
            />
            <div className="absolute -bottom-6 -right-6 bg-destructive text-destructive-foreground px-6 py-3 rounded-xl font-semibold shadow-lg">
              This stops now.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;