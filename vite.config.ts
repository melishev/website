import path from 'path';

import { defineConfig, type PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Melishev',
        short_name: 'melishev - web dev',
        description:
          `Personal web application by Matvey Melishev,
          for testing and demonstrating various cool technologies`,
        icons: [
          {
            src: 'favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#1B1B1B',
        background_color: '#1B1B1B',
        display: 'standalone',
      },
    }),
    visualizer() as PluginOption,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/app/assets/fontStyles";
        `,
      },
    },
  },
});
