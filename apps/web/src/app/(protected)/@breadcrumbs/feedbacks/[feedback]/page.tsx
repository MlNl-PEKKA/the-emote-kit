import {
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Page = () => {
  return (
    <>
      <BreadcrumbLink href="/feedbacks">Feedbacks</BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbPage>F</BreadcrumbPage>
    </>
  );
};

export default Page;
