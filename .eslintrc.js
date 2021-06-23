module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  ignorePatterns: ['build/'],
  // Place to specify ESLint rules. Can be used to overwrite rules from the extended configs
  rules: {
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
