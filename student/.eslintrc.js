module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'newline-before-return': 'error',
    'import/newline-after-import': 'error',
    'no-use-before-define': 0,
    'max-len': ['error', { code: 140 }],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'react/prop-types': 0,
    'react/jsx-curly-newline': 0,
    'react/static-property-placement': 0,
    'no-param-reassign': ['error', { props: false }],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": ['.js', '.jsx', '.json', '.native.js'],
        "moduleDirectory": ["node_modules"],
      }
    }
  }
};
