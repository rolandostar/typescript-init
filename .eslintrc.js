module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  // parserOptions: {
  //   ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
  //   sourceType: 'module', // Allows for the use of imports
  // },
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: [
    'build',
    'node_modules',
    'coverage',
  ],
  // Place to specify ESLint rules. Can be used to overwrite rules from the extended configs
  rules: {
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
