import { Button, Drawer, Space } from '@app/components'
import { ADD_NEW_CARD_FORM } from '@app/forms'
import { DynamicForm } from '@app/modules'
import { CustomDrawerProps } from '@app/types'
import React from 'react'

export const AddNewCardDrawer: React.FC<CustomDrawerProps> = ({ open, toggleOpen, form }) => {
  return (
    <>
      <Drawer title="Add new card" onClose={toggleOpen} open={open} footer={<Footer onCancel={toggleOpen} />}>
        <DynamicForm fields={ADD_NEW_CARD_FORM} form={form} />
      </Drawer>
    </>
  )
}

const Footer = ({ onCancel }) => {
  return (
    <Space>
      <Button>Add card</Button>
      <Button type="default" onClick={onCancel}>
        Cancel
      </Button>
    </Space>
  )
}
