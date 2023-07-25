import { Calendar as AppCalendar } from '@app/components'
import React from 'react'

export default {
  component: AppCalendar,
  title: 'components/Calendar',
}

export const Calendar = (args: any) => {
  return <AppCalendar {...args} fullscreen={false} />
}
