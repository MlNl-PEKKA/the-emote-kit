import { api } from "@/trpc-client/react";

export const useSession = () => api.session.useSuspenseQuery()[0];
