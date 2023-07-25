import { Breadcrumb as AppBreadcrumb } from 'antd'
import React from 'react'

export default {
  component: AppBreadcrumb,
  title: 'components/Breadcrumb',
}

export const Breadcrumb = (args: any) => (
  <AppBreadcrumb {...args}>
    <AppBreadcrumb.Item>Home</AppBreadcrumb.Item>
    <AppBreadcrumb.Item>
      <a href="">Application Center</a>
    </AppBreadcrumb.Item>
    <AppBreadcrumb.Item>
      <a href="">Application List</a>
    </AppBreadcrumb.Item>
    <AppBreadcrumb.Item>An Application</AppBreadcrumb.Item>
  </AppBreadcrumb>
)
