/*
 * @Author: Youzege
 * @Date: 2022-08-15 20:52:06
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-16 22:21:12
 * @FilePath: \dd-ui\src\button\index.tsx
 */
import { defineComponent, PropType } from 'vue'
import 'uno.css'

export type ISize = 'small' | 'medium' | 'large'

export type IColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export const props = {
  size: {
    type: String as PropType<ISize>,
    default: 'medium'
  },
  color: {
    type: String as PropType<IColor>,
    default: 'blue'
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
} as const

export default defineComponent({
  name: 'DButton',
  props,
  setup (props, { slots }) {
    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm'
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base'
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg'
      }
    }

    return () => (
      <button
        class={`
        mx-1
        py-${size[props.size].y}
        px-${size[props.size].x}
        ${props.round ? 'rounded-full' : 'rounded-lg'}
        text-${props.plain ? props.color + '-500' : 'white-500'}
        text-${size[props.size].text}
        bg-${props.color}-${props.plain ? '100' : '500'}
        hover:bg-${props.color}-400
        hover:text-white
        border-${props.color}-${props.plain ? '500' : '500'}
        border-solid
        transition duration-300 ease-in-out transform hover:scale-105
        cursor-pointer 
      `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ''}
      </button>
    )
  }
})
