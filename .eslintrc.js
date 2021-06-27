module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended"],
  plugins: ["vue"],
  rules: {
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    "vue/no-v-model-argument": "off",
    "no-console": "off",
    "vue/no-mutating-props": "off",
    "no-var": 2,
    "eol-last": [0],
    semi: [2, "always"], // 强制语句分号结尾
    indent: [2, 2], // 强制缩进4 spaces
    "no-new": [0], // 不允许new一个实例后不赋值或不比较
    "no-debugger": [0], // 不允许出现debugger语句
    camelcase: [0, { properties: "never" }], // 关闭驼峰命名规则
  },
};
