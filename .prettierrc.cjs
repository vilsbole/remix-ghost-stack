module.exports = {
  printWidth: 80,
  tabWidth: 2,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(remix/(.*)$)|^(remix$)",
    "<THIRD_PARTY_MODULES>",
    "",
    ".*(?:component|layout).*",
    ".*(?:hooks).*",
    "",
    ".*.server$",
    "^types$",
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: [require("@ianvs/prettier-plugin-sort-imports")],
};
