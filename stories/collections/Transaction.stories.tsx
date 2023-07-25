import React from 'react'

import { Transaction as AppTransaction } from '~collections'

export default {
  component: AppTransaction,
  title: 'collections/Transaction',
}

export const Transaction = (args: any) => {
  return (
    <>
      <AppTransaction {...args} />
    </>
  )
}
