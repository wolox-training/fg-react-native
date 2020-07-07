module.exports = {
  root: true,
  extends: ['wolox-react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    complexity: 'off',
    'no-nested-ternary': 'off',
    'no-magic-numbers': 'off',
    'new-cap': 'off',
    'comma-dangle': 'off',
  },
  settings: {
    'import/ignore': ['node_modules'],
  },
};
