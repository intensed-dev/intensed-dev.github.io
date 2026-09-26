import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";
import svelte from "eslint-plugin-svelte";
import ts from "typescript-eslint";

export default [
  {
    ignores: [".svelte-kit/**", "build/**", "node_modules/**"],
  },

  eslint.configs.recommended,

  ...ts.configs.recommended,

  ...svelte.configs["flat/recommended"],

  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ["**/*.svelte"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    rules: {
      "svelte/no-navigation-without-resolve": "off",
    },
  },

  prettier,
];
