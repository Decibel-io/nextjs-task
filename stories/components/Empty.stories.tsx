import { Empty as AppEmpty } from '@app/components'
import React from 'react'

export default {
  component: AppEmpty,
  title: 'components/Empty',
}

export const Empty = (args: any) => <AppEmpty {...args} />
