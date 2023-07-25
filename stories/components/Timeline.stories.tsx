import { Timeline as AppTimeline, TimelineItem } from '@app/components'
import React from 'react'

export default {
  component: AppTimeline,
  title: 'components/Timeline',
}

export const Timeline = (args: any) => {
  return (
    <AppTimeline {...args}>
      <TimelineItem>Create a services site 2015-09-01</TimelineItem>
      <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
      <TimelineItem>Technical testing 2015-09-01</TimelineItem>
      <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
    </AppTimeline>
  )
}
