import { Tabs as AppTabs } from '@app/components'
import { TabsProps } from 'antd'
import React from 'react'

export default {
  component: AppTabs,
  title: 'components/Tabs',
}

export const Tabs = (args: any) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ]

  return <AppTabs {...args} defaultActiveKey="1" items={items} />
}
