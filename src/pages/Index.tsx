
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WorkflowSection from "@/components/WorkflowSection";
import DashboardSection from "@/components/DashboardSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SolutionSection />
      <ProblemSection />
      <WorkflowSection />
      <DashboardSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
