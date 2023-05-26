export default {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["vue", "prettier"],
    rules: {
        "vue/multi-word-component-names": "off",
        "no-unused-vars": "off",
        "no-extra-boolean-cast": "off",
        "vue/no-deprecated-router-link-tag-prop": "off",
    },
};
