import type { NextProps } from "@/app/types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export const Actions = async (
  props: NextProps<["feedback", "all"]>["page"]
) => {
  const params = await props.params;
  const rest = params?.all?.[2];
  const link = `/feedbacks/${params.feedback}`;
  const value = `${link}${rest ? `/${rest}` : ""}`;
  return (
    <Tabs value={value}>
      <TabsList>
        <TabsTrigger asChild value={`${link}`} className="gap-2">
          <Link href={`${link}`}>Playground</Link>
        </TabsTrigger>
        <TabsTrigger asChild value={`${link}/stats`} className="gap-2">
          <Link href={`${link}/stats`}>Stats</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
