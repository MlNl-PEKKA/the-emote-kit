import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import tailwindStyles from "./index.css?inline";

export const Widget = () => {
  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="widget">
        <Button variant="outline">Button</Button>
        <Badge variant="outline">Badge</Badge>
      </div>
    </>
  );
};
