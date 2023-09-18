module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxt/eslint-config"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debug': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     semi: true,
    //     useTabs: true,
    //     tabWidth: 2,
    //     trailingComma: 'all',
    //     printWidth: 160,
    //     bracketSpacing: true,
    //     arrowParens: 'avoid',
    //     endOfLine: 'auto',
    //   },
    // ],
  },
};