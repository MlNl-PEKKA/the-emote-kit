import { emotes } from "src/app/(protected)/emotes/_common/api/emotes";
import { auth } from "~/app/api/auth";
import { user } from "~/protected/api/user";
import { createCallerFactory, createTRPCRouter } from "~/server/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth,
  user,
  emotes,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
