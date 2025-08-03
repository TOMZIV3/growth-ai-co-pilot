import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Target } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const DashboardSection = () => {
  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Growth Channels Chosen",
      description: "AI selects the 3-4 channels that will work best for your specific product and audience"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Your Next 3 Tasks", 
      description: "Clear, actionable tasks with deadlines. No overwhelm, just focused execution"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Live Campaign Feedback",
      description: "Real-time analysis of what's working, what's not, and what to adjust immediately"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Community Intelligence",
      description: "Discovers new communities and trending discussions where your audience gathers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Dashboard Preview
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your growth command center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to grow your product, organized in one intelligent dashboard that learns and adapts with your progress.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <img 
              src={dashboardMockup} 
              alt="GrowthGenius dashboard showing growth channels, tasks, and campaign feedback"
              className="relative z-10 rounded-2xl shadow-2xl border border-primary/20"
            />
            
            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-lg font-semibold">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                +47% growth this week
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg font-semibold">
              3 new tasks ready
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
              <p className="text-primary-glow font-medium">
                <strong>No more tab-switching chaos.</strong> Everything you need to grow is in one place, updated in real-time, and optimized for your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;