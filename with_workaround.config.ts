import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['./src/setup.ts', "./src/fetch_setup.ts"]
  }
})
