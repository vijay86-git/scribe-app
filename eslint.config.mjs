import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "error",
      "react/no-unescaped-entities": "off",  // Disable the 'react/no-unescaped-entities' rule
      "@next/next/no-page-custom-font": "off",  // Disable the '@next/next/no-page-custom-font' rule
    },
  },
];

export default eslintConfig;
