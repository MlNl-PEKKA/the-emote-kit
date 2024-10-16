/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */
import { initTRPC, TRPCError } from "@trpc/server";
import type { ProcedureBuilder } from "@trpc/server/unstable-core-do-not-import";
import superjson from "superjson";
import { ZodError, type TypeOf, type ZodSchema } from "zod";
import { createPrivateClient } from "../db";
import { ERRORS } from "../enums";
import { authorize } from "../utils";
import type { User } from "@supabase/supabase-js";
import { env } from "~/env";

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = async (opts: { headers: Headers }) => opts;

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Middleware for timing procedure execution and adding an artificial delay in development.
 *
 * You can remove this if you don't like it, but it can help catch unwanted waterfalls by simulating
 * network latency that would occur in production but not in local development.
 */
const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    // artificial delay in dev
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

const authMiddleware = t.middleware(async ({ next, ctx, path }) => {
  const db = createPrivateClient();

  let sessionUser: User | null;
  if (env.NODE_ENV === "development")
    sessionUser = (await db.auth.getSession()).data.session?.user ?? null;
  else sessionUser = (await db.auth.getUser()).data?.user ?? null;
  if (!sessionUser) throw new TRPCError(ERRORS.UNAUTHORIZED);

  const user = (
    await db
      .from("user")
      .select()
      .eq("id", sessionUser.id)
      .single()
      .throwOnError()
  ).data;
  if (!user)
    throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

  if (!authorize(path, user.membership)) throw new TRPCError(ERRORS.FORBIDDEN);

  return await next({
    ctx: {
      ...ctx,
      user,
    },
  });
});

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure.use(timingMiddleware);
export type PublicProcedure<T = undefined> = Procedure<
  typeof publicProcedure,
  T
>;

/**
 * Private (authenticated) procedure
 *
 * This procedure is intended for queries and mutations that require the user to be authenticated.
 * It ensures that the user is logged in and authorized before accessing the API. User session data + permissions
 * are always accessible through the middleware chain, and you can safely assume the presence of an authenticated user.
 */
export const privateProcedure = t.procedure
  .use(timingMiddleware)
  .use(authMiddleware);
export type PrivateProcedure<T = undefined> = Procedure<
  typeof privateProcedure,
  T
>;

type Procedure<
  U extends ProcedureBuilder<any, any, any, any, any, any, any, any>,
  T = unknown,
> = T extends ZodSchema
  ? U extends ProcedureBuilder<
      infer TContext,
      any,
      infer TContextOverrides,
      any,
      any,
      any,
      any,
      any
    >
    ? {
        ctx: TContext & TContextOverrides;
        input: TypeOf<T>;
      }
    : never
  : U extends ProcedureBuilder<
        infer TContext,
        any,
        infer TContextOverrides,
        any,
        any,
        any,
        any,
        any
      >
    ? {
        ctx: TContext & TContextOverrides;
        input: undefined;
      }
    : never;
