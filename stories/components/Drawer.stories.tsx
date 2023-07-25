import { Drawer as AppDrawer } from '@app/components'
import React from 'react'

export default {
  component: AppDrawer,
  title: 'components/Drawer',
}

export const Drawer = (args: any) => {
  return (
    <AppDrawer {...args} title="Basic Drawer" placement="right" open={true}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </AppDrawer>
  )
}
