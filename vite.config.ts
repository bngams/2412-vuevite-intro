import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ],
  // TODO: handle better in vitest.config.ts or tsconfig.json
  // https://stackoverflow.com/questions/70769062/vue-test-utils-for-vue3-document-is-not-defined
  test: {
    globals: true,
    environment: "jsdom",
  },
})
