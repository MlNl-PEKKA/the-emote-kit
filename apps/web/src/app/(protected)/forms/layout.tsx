import { api, HydrateClient } from "@/trpc/client/server";
import { connection } from "next/server";
import type { PropsWithChildren } from "react";

const Layout = async (props: PropsWithChildren) => {
  await connection();
  void api.protected.forms.read.prefetch();
  return <HydrateClient>{props.children}</HydrateClient>;
};

export default Layout;
