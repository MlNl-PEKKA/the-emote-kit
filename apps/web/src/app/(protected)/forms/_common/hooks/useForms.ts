import { api } from "@/trpc/client/react";

export const useForms = () => api.protected.forms.read.useSuspenseQuery()[0];
