import { Collapse as AppCollapse, CollapsePanel as Panel } from '@app/components'
import React from 'react'

export default {
  component: AppCollapse,
  title: 'components/Collapse',
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

export const Collapse = (args: any) => (
  <AppCollapse defaultActiveKey={['1']} {...args}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </AppCollapse>
)
