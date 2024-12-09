import { Card as UICard } from "@/components/ui/card";
import type { Read } from "@/feedbacks/api/read";

export const Card = (props: Read["output"][number]) => {
  return <UICard>{props.title}</UICard>;
};
