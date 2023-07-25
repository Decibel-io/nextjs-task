import {
  GroupProps as AntInputGroupProps,
  InputProps as AntInputProps,
  InputRef,
  PasswordProps as AntInputPasswordProps,
  SearchProps as AntSearchProps,
  TextAreaProps as AntTextAreaProps,
} from 'antd/lib/input'
import { InputNumberProps as AntInputNumberProps } from 'antd/lib/input-number'
import { Ref } from 'react'

import { BoxProperties } from '../css'

export type InputProps = AntInputProps

export type MultiDigitProps = {
  lengthOfDigits: number
  setCode: (val: string) => void
}

export type InputNumberProps = AntInputNumberProps & BoxProperties
export type TextAreaProps = AntTextAreaProps
export type InputPasswordProps = AntInputPasswordProps
export type InputGroupProps = AntInputGroupProps
export type InputSearchProps = AntSearchProps & { ref?: Ref<InputRef> }
