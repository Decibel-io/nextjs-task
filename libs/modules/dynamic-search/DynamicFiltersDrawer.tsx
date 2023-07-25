import { Drawer, Space } from '@app/components'
import { DynamicForm } from '@app/modules'
import React from 'react'

import { StyledButton } from './elements'
import { DynamicFiltersDrawerProps, ESearchType } from './types'

export const DynamicFiltersDrawer: React.FC<DynamicFiltersDrawerProps> = ({
  open,
  toggleOpen,
  filters,
  handleSubmit,
}) => {
  return (
    <>
      <Drawer
        title="Filters"
        width={'540px'}
        open={open}
        footer={<Footer form={filters.form} handleSubmit={handleSubmit} />}
        onClose={() => {
          filters.form.resetFields()
          toggleOpen()
        }}
      >
        <DynamicForm fields={filters.fields} form={filters.form} />
      </Drawer>
    </>
  )
}

const Footer = ({ form, handleSubmit }) => {
  return (
    <Space>
      <StyledButton onClick={() => handleSubmit(ESearchType.FILTER)}>Apply</StyledButton>
      <StyledButton
        type="default"
        onClick={() => {
          form.resetFields()
        }}
      >
        Clear All
      </StyledButton>
    </Space>
  )
}
