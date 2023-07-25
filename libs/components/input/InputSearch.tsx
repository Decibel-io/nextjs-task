import { InputSearchProps } from '@app/types'
import { Input as AntInput, InputRef } from 'antd'
import { forwardRef } from 'react'

export const InputSearch = forwardRef<InputRef, InputSearchProps>((props) => (
  <AntInput.Search {...props} ref={props.ref} />
))
