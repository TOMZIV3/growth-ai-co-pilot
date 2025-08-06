import { AlertCircle, HelpCircle, Clock, TrendingDown } from "lucide-react";
import beforeAfter from "@/assets/before-after.jpg";

const ProblemSection = () => {
  const problems = [
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "\"Now what?\"",
      description: "Product built. Zero users. Zero plan."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Burning cash, no results",
      description: "Random ads and posts with no strategy or targeting."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Analysis paralysis",
      description: "Endless research but still don't know what to do first."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-destructive">
            Stuck in the founder's nightmare?
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative lg:order-1">
            <img 
              src={beforeAfter} 
              alt="Before and after: confused founder vs clear AI-guided strategy"
              className="rounded-2xl shadow-2xl border border-border"
            />
            <div className="absolute -bottom-4 -right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-semibold shadow-lg text-sm">
              This stops now.
            </div>
          </div>
          
          {/* Problems */}
          <div className="space-y-6 lg:order-2">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-destructive/15 rounded-xl flex items-center justify-center text-destructive group-hover:bg-destructive/25 transition-colors">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-destructive">{problem.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground text-center italic">
                There's a better way. Meet your AI partner below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;