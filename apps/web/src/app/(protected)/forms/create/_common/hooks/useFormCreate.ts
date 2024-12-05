import type { ProcedureMutation } from "@/trpc/server";
import { api } from "@/trpc/client/react";
import type { Create } from "@/forms/create/api/create";
import { useRouter } from "next/navigation";

export const useFormCreate = (): ProcedureMutation<Create> => {
  const router = useRouter();
  return api.protected.forms.create.useMutation({
    onSuccess: () => router.push("/projects"),
  });
};
