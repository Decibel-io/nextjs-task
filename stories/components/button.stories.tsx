import { Button as AppButton } from '@app/components'
import React from 'react'

export default {
  argTypes: {
    size: {
      control: {
        options: ['small', 'middle', 'large'],
        type: 'select',
      },
    },
    type: {
      control: {
        options: ['primary', 'default', 'dashed', 'ghost', 'link', 'text'],
        type: 'select',
      },
    },
  },
  args: {
    block: false,
    disabled: false,
    loading: false,
    size: 'middle',
    type: 'primary',
  },
  component: AppButton,
  title: 'components/Button',
}

export const Button = (args: any) => <AppButton {...args}>Button</AppButton>
