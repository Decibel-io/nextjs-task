import React from 'react'

import { PaymentDetails as AppPaymentDetails } from '~collections'

export default {
  component: AppPaymentDetails,
  title: 'collections/PaymentDetails',
}

export const PaymentDetails = (args: any) => {
  return (
    <>
      <AppPaymentDetails {...args} />
    </>
  )
}
