/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createClient } from "@repo/database/client";

export const createPublicClient = () => {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );
};
