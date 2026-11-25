import { recommended as effect } from "@effect/tsgo/oxlint-presets";
import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";

export default defineConfig({
  env: core.env,
  extends: [core, effect],
  ignorePatterns: ["**/routeTree.gen.ts", "**/env.ts", "**/env.d.ts"],
  options: { typeAware: true, typeCheck: false },
  rules: {
    // Effect.gen / Effect.fn use anonymous `function*` as idiom.
    "func-names": ["error", "always", { generators: "never" }],
    "func-style": "off",
    "sort-keys": "off",
    "react/function-component-definition": "allow",
    // Why :: Ultracite already enforces strict booleans through the TypeScript plugin.
    "effecttsgo/strict-boolean-expressions": "off",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        variables: false,
        classes: true,
        allowNamedExports: false,
      },
    ],
  },
});
