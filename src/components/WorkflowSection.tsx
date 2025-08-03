import { Calendar, MessageSquare, Mail, BarChart3 } from "lucide-react";
import strategyRoadmap from "@/assets/strategy-roadmap.jpg";

const WorkflowSection = () => {
  const workflow = [
    {
      day: "Monday",
      icon: <MessageSquare className="w-5 h-5" />,
      task: "Post in r/startups",
      details: "Share your journey with this exact message: \"Built my first SaaS in 6 months, here's what I learned...\"",
      time: "2:00 PM EST"
    },
    {
      day: "Tuesday", 
      icon: <Mail className="w-5 h-5" />,
      task: "Email 20 leads",
      details: "Reach out to leads from your warm list using the personalized template: \"Hey [Name], saw your post about...\"",
      time: "10:00 AM EST"
    },
    {
      day: "Wednesday",
      icon: <MessageSquare className="w-5 h-5" />,
      task: "LinkedIn content",
      details: "Share a behind-the-scenes post about your building process with 3 key learnings",
      time: "8:00 AM EST"
    },
    {
      day: "Thursday",
      icon: <BarChart3 className="w-5 h-5" />,
      task: "Analyze & adapt",
      details: "Review metrics from Monday's Reddit post and adjust Friday's strategy based on engagement",
      time: "4:00 PM EST"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Imagine this: your growth plan for next week
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No more guesswork. No more "What should I do today?" GrowthGenius gives you a clear roadmap with specific actions, timing, and copy.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Strategy roadmap image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-20"></div>
            <img 
              src={strategyRoadmap} 
              alt="Week by week growth strategy roadmap"
              className="relative z-10 rounded-2xl shadow-2xl border border-border"
            />
          </div>
          
          {/* Workflow steps */}
          <div className="order-1 lg:order-2 space-y-6">
            {workflow.map((item, index) => (
              <div key={index} className="group relative">
                {/* Timeline connector */}
                {index < workflow.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-8 bg-gradient-accent"></div>
                )}
                
                <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-primary">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{item.day}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{item.time}</span>
                    </div>
                    <h4 className="font-medium text-primary mb-2">{item.task}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-success/10 border border-success/20 rounded-xl">
              <p className="text-success font-medium">
                <strong>The result?</strong> You'll have consistent, strategic actions that compound into real growth — instead of random posting that leads nowhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;