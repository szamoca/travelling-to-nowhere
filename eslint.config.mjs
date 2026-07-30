import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu(
    {
      type: "app",
      vue: true,
      typescript: true,
      formatters: true,
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
      ignores: [".pnpm-store/**", "**/migrations/*"],
    },
    {
      rules: {
        "vue/max-len": ["error", {
          code: 120,
          template: 120,
          ignoreUrls: true,
          ignoreHTMLAttributeValues: false,
          ignoreHTMLTextContents: true,
        }],
        "vue/object-property-newline": ["error", {
          allowAllPropertiesOnSameLine: false,
        }],
        "vue/object-curly-newline": ["error", {
          ObjectExpression: { minProperties: 3, consistent: true },
        }],
        "vue/max-attributes-per-line": [
          "error",
          {
            singleline: {
              max: 2,
            },
            multiline: {
              max: 1,
            },
          },
        ],
        "ts/no-redeclare": "off",
        "ts/consistent-type-definitions": ["error", "type"],
        "no-console": ["warn"],
        "antfu/no-top-level-await": ["off"],
        "node/prefer-global/process": ["off"],
        "node/no-process-env": ["error"],
        "perfectionist/sort-imports": [
          "error",
          {
            tsconfig: { rootDir: "." },
          },
        ],
        "unicorn/filename-case": [
          "error",
          {
            cases: { kebabCase: true, pascalCase: true },
            ignore: ["README.md"],
          },
        ],
      },
    },
  ),
);
