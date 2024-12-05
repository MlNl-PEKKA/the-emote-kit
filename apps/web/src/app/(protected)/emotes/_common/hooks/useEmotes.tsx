import { api } from "@/trpc/client/react";

export const useEmotes = () => api.protected.emotes.read.useSuspenseQuery()[0];
