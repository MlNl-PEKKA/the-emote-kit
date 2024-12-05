import { api } from "@/trpc/client/react";

export const useUser = () => api.protected.user.useSuspenseQuery()[0];
