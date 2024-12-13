/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createServerClient } from "@repo/database/client";
import type { TRPCContext } from "@repo/types";

type Args = Pick<TRPCContext, "cookies">;

export const createProtectedClient = (opts: Args) => {
  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return opts.cookies.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              opts.cookies.set(name, value, {
                ...options,
                httpOnly: true,
                secure: true,
                sameSite: "lax",
              })
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
