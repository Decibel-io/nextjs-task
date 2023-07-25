import { InputProps } from '@app/types'
import { Input as AntInput } from 'antd'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>((props) => <AntInput {...props} ref={null} />)
