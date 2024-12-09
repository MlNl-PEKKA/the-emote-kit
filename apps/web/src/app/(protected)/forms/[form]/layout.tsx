import { Navigation } from "@/form/components/Navigation";
import type { FormLayout } from "@/form/types";
import { api, HydrateClient } from "@/trpc/client/server";
import { connection } from "next/server";

const Layout = async (props: FormLayout) => {
  await connection();
  const { form } = await props.params;
  void api.protected.forms.form.read.prefetch({ id: form });
  return (
    <HydrateClient>
      <div className="flex h-full w-full flex-col gap-4 px-4 py-2">
        <Navigation />
        {props.children}
      </div>
    </HydrateClient>
  );
};

export default Layout;
