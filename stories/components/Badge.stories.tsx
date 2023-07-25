import { Badge as AppBadge } from '@app/components'
import React from 'react'

export default {
  component: AppBadge,
  title: 'components/Badge',
}

export const Badge = (args: any) => <AppBadge {...args} count={11} showZero color="#faad14" />
