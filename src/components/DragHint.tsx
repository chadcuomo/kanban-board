import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function DragHint() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const hintDismissed = localStorage.getItem("dragHintDismissed");
    if (!hintDismissed) {
      setShowHint(true);
    }
  }, []);

  const dismissHint = () => {
    localStorage.setItem("dragHintDismissed", "true");
    setShowHint(false);
  };

  if (!showHint) return null;

  return (
    <Card className="fixed bottom-4 right-4 w-72 shadow-lg animate-in slide-in-from-bottom-5 duration-300 z-50">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="font-medium">Pro Tip</h4>
            <p className="text-sm text-muted-foreground">
              You can drag and drop both tasks and columns to rearrange them.
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={dismissHint}
            className="h-6 w-6 -mt-1 -mr-1"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
