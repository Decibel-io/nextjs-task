import { InputNumber as AppInputNumber } from '@app/components'
import React from 'react'

export default {
  component: AppInputNumber,
  title: 'components/InputNumber',
}

export const InputNumber = (args: any) => <AppInputNumber {...args} min={1} max={10} defaultValue={3} />
