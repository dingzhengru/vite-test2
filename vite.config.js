import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),

      //* https://github.com/intlify/vue-i18n-next/issues/789#issuecomment-1285497174
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
});
