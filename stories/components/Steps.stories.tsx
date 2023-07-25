import { Steps as AppSteps } from '@app/components'
import React from 'react'

export default {
  component: AppSteps,
  title: 'components/Steps',
}

export const Steps = (args: any) => (
  <AppSteps
    {...args}
    current={1}
    progressDot
    items={[
      {
        title: 'Finished',
      },
      {
        title: 'In Progress',
      },
      {
        title: 'Waiting',
      },
    ]}
  />
)
