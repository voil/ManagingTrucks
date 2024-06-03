import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)', '../../packages/core/src/**/*.{test,spec}.?(c|m)[jt]s?(x)', '../../packages/modules/src/**/*.{test,spec}.?(c|m)[jt]s?(x)']
  }
  // config
  // https://nuxt.com/docs/getting-started/testing
})
