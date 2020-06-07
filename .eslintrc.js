module.exports = {
  extends: 'airbnb-base',
  plugins: ['babel'],
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 2 }],
    'no-console': 0,
    'arrow-parens': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
  },
};
