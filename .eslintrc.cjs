module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'import'],
  rules: {
    'require-await': 'error',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-unresolved': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
  },
};
