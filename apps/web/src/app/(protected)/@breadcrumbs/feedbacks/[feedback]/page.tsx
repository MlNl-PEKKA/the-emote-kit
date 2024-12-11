"use client";

import {
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useFeedbackRead } from "@/feedback/hooks";

const Page = () => {
  const { title } = useFeedbackRead();
  return (
    <>
      <BreadcrumbLink href="/feedbacks">Feedbacks</BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbPage className="capitalize">{title}</BreadcrumbPage>
    </>
  );
};

export default Page;
