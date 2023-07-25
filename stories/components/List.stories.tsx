import { Avatar, List as AppList, ListItem, ListItemMeta } from '@app/components'
import React from 'react'

export default {
  component: AppList,
  title: 'components/List',
}

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

export const List = (args: any) => (
  <AppList
    {...args}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <ListItem>
        <ListItemMeta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </ListItem>
    )}
  />
)
