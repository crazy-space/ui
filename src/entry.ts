/*
 * @Author: Youzege
 * @Date: 2022-08-15 20:53:39
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-15 21:53:04
 * @FilePath: \dd-ui\src\entry.ts
 */
import { App } from "vue";
import DButton from "./button/DButton.vue";
import JSXButton from "./JSXButton/JSXButton";

// 导出单独组件
export { DButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(DButton.name, DButton);
    app.component(JSXButton.name, JSXButton);
  },
};