import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import WaitlistForm from "./WaitlistForm";

interface WaitlistDialogProps {
  children: React.ReactNode;
}

const WaitlistDialog = ({ children }: WaitlistDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl bg-gradient-hero bg-clip-text text-transparent">
            Join the Waitlist
          </DialogTitle>
        </DialogHeader>
        <WaitlistForm 
          variant="modal" 
          onSuccess={() => {
            setTimeout(() => setOpen(false), 2000);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;