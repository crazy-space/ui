/*
 * @Author: Youzege
 * @Date: 2022-08-15 20:42:36
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-15 22:29:05
 * @FilePath: \dd-ui\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from "./config/unocss";

// https://vitejs.dev/config/

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    sourcemap: true, // 输出单独 source文件
    lib: {
      entry: './src/entry.ts',
      name: 'DDUI',
      fileName: 'dd-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife']
    },
    outDir: './dist'
  }
})
