import { Title as AppTitle } from '@app/components'
import React from 'react'

export default {
  component: AppTitle,
  title: 'components/Title',
}

export const Title = (args: any) => {
  return (
    <>
      <AppTitle {...args}>h1. Ant Design</AppTitle>
      <AppTitle {...args} level={2}>
        h2. Ant Design
      </AppTitle>
      <AppTitle {...args} level={3}>
        h3. Ant Design
      </AppTitle>
      <AppTitle {...args} level={4}>
        h4. Ant Design
      </AppTitle>
      <AppTitle {...args} level={5}>
        h5. Ant Design
      </AppTitle>
    </>
  )
}
