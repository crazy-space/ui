/*
 * @Author: Youzege
 * @Date: 2022-08-16 22:16:27
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-16 22:16:31
 * @FilePath: \dd-ui\env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}