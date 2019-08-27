module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/button-has-type': 0,
    'react/no-access-state-in-setstate': 0,
    'react/no-unused-state': 0,
    'react/destructuring-assignment': 0,
    'react/state-in-constructor': 0,
    'react/jsx-filename-extension': [0],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    /* JSX */
    'react/prop-types': [
      1,
      {
        ignore: ['className', 'children', 'location', 'params', 'location*'],
      },
    ],
    'no-param-reassign': [
      0,
      {
        props: false,
      },
    ],
    'prefer-rest-params': 1,
    'arrow-body-style': 0,
    'prefer-template': 0,
    'react/prefer-stateless-function': 1,
    'react/jsx-no-bind': [
      0,
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: true,
      },
    ],
  },
};
