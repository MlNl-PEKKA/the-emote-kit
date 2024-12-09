import type { FormLayout } from "@/form/types";
import { api, HydrateClient } from "@/trpc/client/server";
import { connection } from "next/server";

const Layout = async (props: FormLayout) => {
  await connection();
  const { form } = await props.params;
  void api.protected.forms.form.kit.emotes.options.prefetch({ id: form });
  void api.protected.forms.form.kit.emotes.read.prefetch({ id: form });
  return <HydrateClient>{props.children}</HydrateClient>;
};

export default Layout;
