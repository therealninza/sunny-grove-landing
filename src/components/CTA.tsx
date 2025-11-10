import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const CTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting contributor application:", { name, email });

      const { data, error } = await supabase.functions.invoke(
        "send-contributor-application",
        {
          body: { name, email },
        }
      );

      if (error) {
        console.error("Error sending application:", error);
        throw error;
      }

      console.log("Application sent successfully:", data);

      toast({
        title: "Application submitted!",
        description: "We'll be in touch soon about your contribution.",
      });
      
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Failed to submit application:", error);
      toast({
        title: "Error",
        description: "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-accent py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Our Innovative Project
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contribute to sustainable agriculture while earning Bitcoin rewards through our solar-powered mining operations.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-white text-accent hover:bg-white/90 px-8 py-6">
              Become a Contributor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Become a Contributor</DialogTitle>
              <DialogDescription>
                Fill out this form to join our community of contributors.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};