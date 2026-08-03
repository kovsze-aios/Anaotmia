import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // ── Architecture boundary: UI must not reach into the data tier ───────────
  //
  //   src/server/{models,repositories,services}  =  API / data tier
  //   src/components, src/hooks, src/lib         =  UI tier
  //
  // UI code goes through `@/server` (services) or `@/services` (HTTP facade).
  // Importing a repository or a dataset directly would drag megabytes of
  // textbook content into the client bundle — the exact coupling this split
  // exists to prevent.
  {
    files: ["src/components/**/*.{ts,tsx}", "src/hooks/**/*.{ts,tsx}", "src/lib/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/server/repositories", "@/server/repositories/*"],
              message:
                "UI must not import repositories directly. Use a service via '@/server', or '@/services' for client components.",
            },
            {
              group: ["@/server/services", "@/server/services/*"],
              message:
                "Import services through the '@/server' barrel, or call the API via '@/services' from a client component.",
            },
          ],
        },
      ],
    },
  },

  // The data tier is framework-agnostic: no React, no Next.js, no UI imports.
  {
    files: ["src/server/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/components", "@/components/*", "@/hooks", "@/hooks/*", "@/services", "@/services/*"],
              message:
                "The data tier must not depend on UI code. Keep src/server free of React and client concerns.",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
