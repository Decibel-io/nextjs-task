import { Alert as AppAlert } from '@app/components'
import React from 'react'

export default {
  component: AppAlert,
  title: 'components/Alert',
}

export const Alert = (args: any) => {
  return (
    <>
      <AppAlert {...args} message="Success Alert" type="success" />
    </>
  )
}
