import { config } from "@repo/eslint-config/base";

/** @type {import("eslint").Linter.Config} */
export default {
  ...config,
  rules: {
    ...config.rules,
    "@typescript-eslint/consistent-type-imports": "off",
  },
};
