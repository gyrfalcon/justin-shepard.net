module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react',
    'flowtype',
  ],
  rules: {
    indent: [ 'error', 2, {
      SwitchCase: 1,
    }],
    'comma-dangle': [ 'error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/define-flow-type': 'error',
    'max-len': ['error', 120, {
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
    }],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "16.6",
      flowVersion: "0.86.0",
    },
    propWrapperFunctions: [ "forbidExtraProps" ],
  }
}
