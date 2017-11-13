module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      generators: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  plugins: ['react'],
  extends: ['airbnb'],
  "env": {
    "browser": true,
    "jquery": false,
    "node": true,
    "jest": true
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  globals: {
    window: true,
    document: true,
    __dirname: true,
    __DEV__: true,
    CONFIG: true,
    process: true,
    jest: true,
    describe: true,
    test: true,
    it: true,
    expect: true,
    beforeEach: true
  },
  'import/resolver': {
    node: {
      extensions: ['.js', '.css', '.json', '.styl']
    }
  },
  'import/extensions': ['.js'],
  'import/ignore': ['node_modules', 'flow-typed', '\\.(css|styl|svg|json)$'],
  rules: {
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreStrings": true,
        "ignoreTrailingComments": true
      }
    ],
    semi: "error",
    "no-var": 2,
    "prefer-arrow-callback": ["error"],
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "complexity": ["error", { "max": 10 }],
    "react/jsx-no-bind": [2, { "ignoreRefs": true }],
    "jsx-a11y/href-no-hash": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-closing-bracket-location": 0,
    "curly": [2, "all"],
    "brace-style": [2, "1tbs", { "allowSingleLine": false }],
    "no-alert": 2,
    "react/forbid-prop-types": [2, { "forbid": ["any"] }],
    /* https://github.com/AtomLinter/linter-eslint/issues/768 */
    "import/no-extraneous-dependencies": 0,
    "no-extra-parens": ["error", "all", { "ignoreJSX": "all", "nestedBinaryExpressions": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "comma-dangle": ["error", "never"]
  }
};
