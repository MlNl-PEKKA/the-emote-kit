import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as UICard,
} from "@/components/ui/card";
import type { Read } from "@/feedbacks/types";
import { StatusBadge } from "./StatusBadge";
import Link from "next/link";

export const Card = (props: Read["output"][number]) => {
  return (
    <Link href={`/feedbacks/${props.id}`}>
      <UICard className="flex flex-row justify-between bg-card/80 hover:bg-card cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl">{props.title}</CardTitle>
          <CardDescription>
            {new Date(props.created_at).toLocaleString("en-IN")}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <StatusBadge feedback={props} />
        </CardFooter>
      </UICard>
    </Link>
  );
};
