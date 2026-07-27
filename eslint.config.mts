import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

        plugins: {
            js,
            i18next,
        },

        extends: [
            "js/recommended",
        ],

        languageOptions: {
            globals: globals.browser,
        },

        rules: {
            ...i18next.configs.recommended.rules,
        },
    },

    tseslint.configs.recommended,

    pluginReact.configs.flat.recommended,

    {
        rules: {
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            indent: [2, 4],
            "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
            "import/no-unresolved": "off",
            "import/prefer-default-export": "off",
            "react/require-default-props": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/function-component-definition": "off",
            "no-shadow": "off",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "no-underscore-dangle": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "i18next/no-literal-string": [
                "error",
                {
                    markupOnly: true,
                },
            ],
        },
    },
]);