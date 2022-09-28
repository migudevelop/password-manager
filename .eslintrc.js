const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    '@typescript-eslint/no-misused-promises': [
      RULES.ERROR,
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/restrict-template-expressions': RULES.OFF,
    '@typescript-eslint/no-floating-promises': RULES.OFF,
    '@typescript-eslint/no-invalid-void-type': RULES.OFF,
    '@typescript-eslint/strict-boolean-expressions': RULES.OFF,
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  }
}
