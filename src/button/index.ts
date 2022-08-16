/*
 * @Author: Youzege
 * @Date: 2022-08-16 22:47:32
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-16 22:55:07
 * @FilePath: \dd-ui\src\button\index.ts
 */
import Button from "./Button";
import { App } from "vue";

// 导出Button组件
export { Button };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};