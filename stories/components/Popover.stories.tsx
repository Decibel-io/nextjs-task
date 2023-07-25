import { Button, Popover as AppPopover } from '@app/components'
import React from 'react'

export default {
  component: AppPopover,
  title: 'components/Popover',
}

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

export const Popover = (args: any) => (
  <AppPopover {...args} content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </AppPopover>
)
