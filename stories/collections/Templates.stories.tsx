import React from 'react'

import { Templates as AppTemplates } from '~collections'

export default {
  component: AppTemplates,
  title: 'collections/Templates',
}

export const Templates = (args: any) => {
  return (
    <>
      <AppTemplates {...args} />
    </>
  )
}
