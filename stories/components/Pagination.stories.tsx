import { Pagination as AppPagination } from '@app/components'
import React from 'react'

export default {
  component: AppPagination,
  title: 'components/Pagination',
}

export const Pagination = (args: any) => (
  <AppPagination defaultCurrent={10} total={500} {...args} showSizeChanger={false} />
)
