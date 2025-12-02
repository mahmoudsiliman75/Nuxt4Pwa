// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  extends: ['prettier'],

  rules: {
    // Allow console.log in development (disable in production via CI)
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Better Vue naming convention (PascalCase for components)
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],

    // Disallow unused vars
    'no-unused-vars': 'error',

    // Enforce dot notation when possible
    'dot-notation': 'error',

    // Prefer const over let when possible
    'prefer-const': 'error',

    // Enforce consistent return statements
    'consistent-return': 'error',

    // Limit complexity
    complexity: ['warn', 10],

    // No debugger in production
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },

  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
})
