import type { DB } from "./types";
import { createServerClient as _createServerClient } from "@supabase/ssr";
import { createClient as _createClient } from "@supabase/supabase-js";

export const createServerClient = (
  ...args: Parameters<typeof _createServerClient>
) => {
  return _createServerClient<DB>(...args);
};

export const createClient = (...args: Parameters<typeof _createClient>) =>
  _createClient<DB>(...args);
