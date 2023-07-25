import { FloatButtonProps as AntFloatButtonProps } from 'antd'
import { ButtonProps as AntButtonProps } from 'antd/lib/button'
import { Ref } from 'react'

export type ButtonProps = AntButtonProps & { width?: string; type?: string; ref?: Ref<HTMLButtonElement> }
export type FloatButtonProps = AntFloatButtonProps
