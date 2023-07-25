import { UserOutlined } from '@ant-design/icons'
import { Avatar as AppAvatar } from '@app/components'
import React from 'react'

export default {
  component: AppAvatar,
  title: 'components/Avatar',
}

export const Avatar = (args: any) => <AppAvatar {...args} size={64} icon={<UserOutlined />} />
