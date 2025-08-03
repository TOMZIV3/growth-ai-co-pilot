import { Brain, Target, Calendar, Users, TrendingUp, Zap } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Product Analysis",
      description: "Analyzes your product, audience, and competitors to understand your unique market position."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Channel Recommendations",
      description: "Tells you exactly which platforms to focus on: Reddit, TikTok, LinkedIn, cold email, or others."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Weekly Action Plans",
      description: "Get specific tasks for each week: \"Post in r/startups Tuesday at 4pm with this message.\""
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Mapping",
      description: "Identifies the exact communities, threads, and influencers where your audience hangs out."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Tracking",
      description: "Monitors your traction and adapts recommendations based on what's actually working."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ready-to-Use Copy",
      description: "Generates social posts, cold emails, and ad copy tailored to each platform and audience."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet your <span className="bg-gradient-hero bg-clip-text text-transparent">AI Growth Co-Founder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            GrowthGenius doesn't just give you generic advice. It becomes your strategic partner, analyzing your specific situation and guiding you step-by-step to profitable growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mb-6 group-hover:shadow-glow transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Connecting line for larger screens */}
              {index < features.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-accent"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-primary/10 border border-primary/20 rounded-2xl">
            <p className="text-lg text-primary-glow font-medium">
              <strong>Think of it as having a seasoned growth hacker on your team</strong> — but one that never sleeps, knows every platform, and costs 99% less than hiring someone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;