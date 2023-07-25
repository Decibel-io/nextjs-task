import { Switch as AppSwitch } from '@app/components'
import React from 'react'

export default {
  component: AppSwitch,
  title: 'components/Switch',
}

export const Switch = (args: any) => <AppSwitch {...args} defaultChecked />
