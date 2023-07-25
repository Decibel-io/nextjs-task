import { DownOutlined, SmileOutlined } from '@ant-design/icons'
import { Dropdown as AppDropdown, Space } from '@app/components'
import { MenuProps } from '@app/types'
import React from 'react'

export default {
  component: AppDropdown,
  title: 'components/Dropdown',
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    disabled: true,
    icon: <SmileOutlined />,
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
  },
  {
    disabled: true,
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
  },
  {
    danger: true,
    key: '4',
    label: 'a danger item',
  },
]

export const Dropdown = (args: any) => (
  <AppDropdown menu={{ items }} {...args}>
    <a>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </AppDropdown>
)
