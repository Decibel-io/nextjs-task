import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu as AppMenu } from '@app/components'
import { MenuProps } from '@app/types'
import React from 'react'

export default {
  component: AppMenu,
  title: 'components/Menu',
}

const items: MenuProps['items'] = [
  {
    icon: <MailOutlined />,
    key: 'mail',
    label: 'Navigation One',
  },
  {
    disabled: true,
    icon: <AppstoreOutlined />,
    key: 'app',
    label: 'Navigation Two',
  },
  {
    icon: <SettingOutlined />,
    key: 'SubMenu',
    label: 'Navigation Three - Submenu',
    children: [
      {
        label: 'Item 1',
        type: 'group',
        children: [
          {
            key: 'setting:1',
            label: 'Option 1',
          },
          {
            key: 'setting:2',
            label: 'Option 2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
]

export const Menu = (args: any) => (
  // const [current, setCurrent] = useState('mail');

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };

  <AppMenu
    {...args}
    // onClick={onClick}
    // selectedKeys={[current]}
    mode="horizontal"
    items={items}
  />
)
