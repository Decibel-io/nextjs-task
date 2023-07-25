import { Text as AppText } from '@app/components'
import React from 'react'

export default {
  component: AppText,
  title: 'components/Text',
}

export const Text = (args: any) => {
  return (
    <>
      <AppText {...args}>h1. Ant Design</AppText>
    </>
  )
}
