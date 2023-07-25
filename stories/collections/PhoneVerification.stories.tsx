import React from 'react'

import { PhoneVerification as AppPhoneVerification } from '~collections'

export default {
  component: AppPhoneVerification,
  title: 'collections/PhoneVerification',
}

export const PhoneVerification = (args: any) => {
  return (
    <>
      <AppPhoneVerification {...args} />
    </>
  )
}
