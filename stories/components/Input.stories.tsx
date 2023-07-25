import { Input as AppInput } from '@app/components'
import React from 'react'

export default {
  component: AppInput,
  title: 'components/Input',
}

export const Input = (args: any) => <AppInput {...args} placeholder="Basic usage" />
