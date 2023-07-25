import { Select as AppSelect } from '@app/components'
import React from 'react'

export default {
  component: AppSelect,
  title: 'components/Select',
}

export const Select = (args: any) => (
  <AppSelect
    {...args}
    defaultValue="lucy"
    style={{ width: 120 }}
    options={[
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ]}
  />
)
