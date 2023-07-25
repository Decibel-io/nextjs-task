import React from 'react'

import { TransferHistory as AppTransferHistory } from '~collections'

export default {
  component: AppTransferHistory,
  title: 'collections/TransferHistory',
}

export const TransferHistory = (args: any) => {
  return (
    <>
      <AppTransferHistory {...args} />
    </>
  )
}
