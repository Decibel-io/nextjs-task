import { CascaderProps as AntCascaderProps } from 'antd/lib/cascader'

import { Any } from '../general'

export type CascaderProps = AntCascaderProps<Any>

export interface Option {
  value: string
  label: string
  children?: Option[]
}
