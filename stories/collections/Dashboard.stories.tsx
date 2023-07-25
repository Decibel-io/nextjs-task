import React from 'react'

import { Dashboard as AppDashboard } from '~collections'

export default {
  component: AppDashboard,
  title: 'collections/Dashboard',
}

export const Dashboard = (args: any) => {
  return (
    <>
      <AppDashboard {...args} />
    </>
  )
}
