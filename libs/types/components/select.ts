import { OptionProps as AntOptionProps, SelectProps as AntSelectProps } from 'antd/lib/select'

import { BoxProperties } from '../css'

export type SelectProps<K> = AntSelectProps<K> & BoxProperties
export type OptionProps = AntOptionProps
