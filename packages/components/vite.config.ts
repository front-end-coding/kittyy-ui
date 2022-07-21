import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          dir: 'es',
          preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'src'
        }
      ],
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs']
    }
  },
  plugins: [
    vue(),
    dts(),
    dts({
      outputDir: 'lib',
      tsConfigFilePath: '../../tsconfig.json'
    })
  ]
})