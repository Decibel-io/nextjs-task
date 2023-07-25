import { Modal as AppModal } from '@app/components'
import React from 'react'

export default {
  component: AppModal,
  title: 'components/Modal',
}

export const Modal = (args: any) => {
  return (
    <AppModal {...args} title="Basic Modal" open={true}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </AppModal>
  )
}
