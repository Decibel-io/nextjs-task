import { PageHeader as AppPageHeader } from '@ant-design/pro-components'
import React from 'react'

export default {
  component: AppPageHeader,
  title: 'components/PageHeader',
}

export const PageHeader = (args: any) => {
  return <AppPageHeader {...args}>Page Header</AppPageHeader>
}
