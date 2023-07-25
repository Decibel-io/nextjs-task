import { EllipsisOutlined } from '@ant-design/icons'
import { Dropdown } from '@app/components'
import { MenuProps } from '@app/types'
import React from 'react'

const handleMenuClick: MenuProps['onClick'] = (e) => {
  switch (e.key) {
    case '1':
      return
    case '2':
      return
    case '3':
      return
    default:
      break
  }
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Edit',
  },
  {
    key: '2',
    label: 'Set as default',
  },
  {
    key: '3',
    label: 'Remove',
  },
]

const menuProps = {
  items,
  onClick: handleMenuClick,
}

export const MoreActionsDropdown: React.FC = () => {
  return (
    <Dropdown menu={menuProps} trigger={['click']}>
      <EllipsisOutlined />
    </Dropdown>
  )
}
