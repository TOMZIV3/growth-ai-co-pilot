import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  variant?: "inline" | "modal" | "page";
  onSuccess?: () => void;
}

const WaitlistForm = ({ variant = "inline", onSuccess }: WaitlistFormProps) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest_level: 5
  });
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('waitlist_entries')
        .insert([{
          name: formData.name || null,
          email: formData.email,
          company: formData.company || null,
          interest_level: formData.interest_level
        }]);

      if (error) throw error;

      // Send email notification via edge function
      const { error: emailError } = await supabase.functions.invoke('send-waitlist-notification', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          interest_level: formData.interest_level
        }
      });

      if (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the whole process if email fails
      }

      setSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you as soon as we launch.",
      });
      
      onSuccess?.();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground mb-4">
              We'll send you an email as soon as we launch. Get ready for some serious growth!
            </p>
            <div className="text-sm text-muted-foreground">
              Position: <span className="font-medium text-primary">#547</span> in line
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-background/50"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-background/50"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input
          id="company"
          type="text"
          placeholder="Your startup"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">How excited are you? (1-10)</Label>
        <Input
          id="interest"
          type="range"
          min="1"
          max="10"
          value={formData.interest_level}
          onChange={(e) => setFormData({ ...formData, interest_level: parseInt(e.target.value) })}
          className="bg-background/50"
        />
        <div className="text-center text-sm text-muted-foreground">
          Level: <span className="font-medium text-primary">{formData.interest_level}/10</span>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-primary hover:scale-105 transition-transform" 
        disabled={loading}
        size="lg"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Joining...
          </>
        ) : (
          <>
            Join the Waitlist
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        We'll never spam you. Unsubscribe at any time.
      </p>
    </form>
  );

  if (variant === "modal" || variant === "page") {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Join the Waitlist</CardTitle>
        </CardHeader>
        <CardContent>
          {formContent}
        </CardContent>
      </Card>
    );
  }

  return formContent;
};

export default WaitlistForm;