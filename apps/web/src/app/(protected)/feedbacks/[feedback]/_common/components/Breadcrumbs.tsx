"use client";

import {
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useFeedbackRead } from "@/feedback/hooks";

export const Breadcrumbs = () => {
  const { title } = useFeedbackRead();
  return (
    <>
      <BreadcrumbLink href="/feedbacks">Feedbacks</BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbPage className="capitalize">{title}</BreadcrumbPage>
    </>
  );
};
