export default {
  extends: 'airbnb-base',
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 1,
    // 'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1,
    'react/react-in-jsx-scope': 1,
    'react/prefer-es6-class': 1,
    'react/jsx-no-bind': 1,
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 2 }],
    'no-console': 0
  }
};
