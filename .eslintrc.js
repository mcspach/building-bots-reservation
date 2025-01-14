module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: false
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: [2, 2]
  }
};
