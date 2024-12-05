import { useFormParams } from "@/form/hooks/useFormParams";
import { api } from "@/trpc/client/react";

export const useKitEmoteOptions = () => {
  const { form } = useFormParams();
  return api.protected.forms.form.kit.emotes.options.useSuspenseQuery({
    id: form,
  })[0];
};
