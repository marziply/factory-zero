module.exports = {
  env: {
    commonjs: true,
    node: true,
    jest: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended'
  ],
  parser: 'babel-eslint',
  rules: {
    'new-cap': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'jsdoc/no-undefined-types': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never']
  },
  plugins: ['jsdoc']
}
