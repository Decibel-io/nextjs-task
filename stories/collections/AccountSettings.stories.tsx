import React from 'react'

import { Settings as AppSettings } from '~collections'

export default {
  component: AppSettings,
  title: 'collections/Settings',
}

export const Settings = (args: any) => {
  return (
    <>
      <AppSettings {...args} />
    </>
  )
}
