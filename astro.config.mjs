import { defineConfig } from 'astro/config'
import { visualizer } from 'rollup-plugin-visualizer'
// https://astro.build/config
export default defineConfig({
  site: 'https://stanleyz94.github.io',
  vite: {
    plugins: [visualizer({ gzipSize: true })],
  },
})
