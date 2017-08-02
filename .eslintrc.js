module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    browser: true,
    jasmine: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'linebreak-style': 0,
    'new-cap': 0,
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'import/prefer-default-export': 0,
    'arrow-parens': [0, 'always'],
  },
};
