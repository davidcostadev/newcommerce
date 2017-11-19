module.exports = {
  plugins: ['react'],
  extends: ['airbnb'],
  env: { 'es6': true },
  rules: {
    semi: ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': 'off'
  }
};
