module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: [
    'react',
    'react-native',
  ],
  env: {
    jest: true,
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'class-methods-use-this': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'global-require': ['off'],
    'import/no-cycle': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': ['error', { 'ignore': ['\\.(png)$'] }],
    'import/order': ['error', {
      'newlines-between': 'never',
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],
    'import/prefer-default-export': ['off'],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'no-console': 0,
    'no-implicit-coercion': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'no-restricted-imports': [
      'error',
      {
        'paths': [
          {
            'name': 'react-native-web',
            'importNames': [
              'Animated',
              'View',
              'Text',
              'ScrollView',
              'TouchableOpacity',
              'TouchableNativeFeedback',
              'TouchableHighlight',
              'TouchableWithoutFeedback',
            ],
            'message': 'Please import it from \'react-native\' instead.',
          },
        ],
      },
    ],
    'no-warning-comments': ['warn'],
    'padding-line-between-statements': ['error',
      { 'blankLine': 'always', 'prev': 'directive', 'next': '*' },
      { 'blankLine': 'any', 'prev': 'directive', 'next': 'directive' },
      { 'blankLine': 'always', 'prev': 'class', 'next': '*' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'export' },
      { 'blankLine': 'any', 'prev': 'export', 'next': 'export' },
    ],
    'prettier/prettier': ['warn'],
    'react/forbid-prop-types': ['off'],
    'react/jsx-curly-newline': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['error', { 'ignore': ['navigation'] }],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.native.js'],
      },
    },
  },
  globals: {
    '__CLIENT__': true,
    '__SERVER__': true,
    '__DEV__': true,
  },
}
