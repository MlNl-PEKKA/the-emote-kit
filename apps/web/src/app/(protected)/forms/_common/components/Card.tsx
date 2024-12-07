"use client";

import { Badge } from "@/components/ui/badge";
import { CardContent, Card as CardDev, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { DBTable } from "@repo/database/types";
import { useRouter } from "next/navigation";

type Props = DBTable<"form">;

export const Card = ({ status = "active", name = "Form 1", id }: Props) => {
  const router = useRouter();
  return (
    <CardDev
      className="w-full max-w-[200px] overflow-hidden"
      onClick={() => router.push(`/forms/${id}`)}
    >
      <CardHeader className="relative flex h-40 items-center justify-center border-b-[1px] text-6xl">
        ⚡
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="truncate text-lg font-semibold capitalize">{name}</h3>
          <Badge
            variant="outline"
            className={cn(
              "ml-2",
              status === "active"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                : "hidden"
            )}
          >
            {status === "active" ? "Active" : "Inactive"}
          </Badge>
        </div>
      </CardContent>
    </CardDev>
  );
};
