
"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("welcomeShown")) {
      setOpen(true);
      sessionStorage.setItem("welcomeShown", "true");
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome!</DialogTitle>
          <DialogDescription>
            Feel free to explore and look around. If you have any suggestions, please leave a note — it would be greatly appreciated.
            <br /><br />
            Mr. Robiul Munna is currently busy with another task. I’m his AI assistant, and if you work with me, I’ll do my best to help you get your task done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
