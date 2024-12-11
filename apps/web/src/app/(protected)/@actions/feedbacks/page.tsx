import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const Page = () => (
  <Button asChild>
    <Link href={"/feedbacks/create"}>
      <PlusCircle />
      Create
    </Link>
  </Button>
);

export default Page;
