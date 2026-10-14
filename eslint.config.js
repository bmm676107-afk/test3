module.exports = [
  { ignores: ["solutions/**", "node_modules/**"] },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: { require: "readonly", module: "writable", console: "readonly" },
    },
    rules: {
      "no-var": "error",
      "eqeqeq": "error",
      "no-unused-vars": "error",
    },
  },
];
