import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Target } from "lucide-react";
import realisticDashboard from "@/assets/realistic-dashboard.jpg";

const DashboardSection = () => {
  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Smart Channel Selection",
      description: "AI analyzed 50+ channels and chose Reddit (87% engagement), Email (23% open rate), and Product Hunt for your SaaS"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Specific Daily Actions", 
      description: "\"Post case study in r/SaaS tomorrow 2pm EST\" - not vague advice, but exact tasks with timing"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Real Performance Data",
      description: "Track 1,247 monthly visitors (+47% this week), 234 email subscribers, 89 Reddit upvotes - all in real-time"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Trending Opportunity Alerts",
      description: "\"r/entrepreneur trending: 'startup validation' - post opportunity detected\" - never miss viral moments"
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
              src={realisticDashboard} 
              alt="GrowthGenius dashboard showing real metrics: 1,247 monthly visitors, specific tasks like 'Post in r/SaaS tomorrow 2pm', and live channel performance"
              className="relative z-10 rounded-2xl shadow-2xl border border-primary/20"
            />
            
            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-lg font-semibold">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                1,247 visitors this month
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg font-semibold">
              Post in r/SaaS tomorrow 2pm
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
                <strong>This is your growth command center.</strong> Real metrics, specific tasks, trending opportunities - everything you need to grow from 0 to $10k MRR in one intelligent dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;