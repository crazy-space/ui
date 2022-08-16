/*
 * @Author: Youzege
 * @Date: 2022-08-15 20:06:01
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-16 22:54:44
 * @FilePath: \dd-ui\src\main.ts
 */
import { createApp } from "vue/dist/vue.esm-browser";
import DDUI from './entry'
// import DButton  from './button'

createApp({
  template:`
      <div>
          <DButton color="red" size="small">小红按钮</DButton>
          <DButton color="blue">一般蓝按钮</DButton>
          <DButton color="purple" size="large">大紫按钮</DButton>
      </div>
      <div style="margin-top: 20px">
        <DButton color="blue" round plain icon="search" ></DButton>
        <DButton color="green" round plain icon="edit" ></DButton>
        <DButton color="gray" round plain icon="check" ></DButton>
        <DButton color="yellow" round plain icon="message" ></DButton>
        <DButton color="red" round plain icon="delete" ></DButton>
      </div>
  `
})
.use(DDUI)
// .use(DButton)
.mount("#app");