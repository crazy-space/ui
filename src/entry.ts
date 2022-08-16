/*
 * @Author: Youzege
 * @Date: 2022-08-15 20:53:39
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-16 22:55:00
 * @FilePath: \dd-ui\src\entry.ts
 */
import { App } from 'vue'
import { Button } from './button'
import "uno.css";

// 导出单独组件
export { Button }

// 编写一个插件，实现一个install方法

export default {
  install (app: App): void {
    app.component(Button.name, Button)
  }
}
