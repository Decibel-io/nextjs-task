import { Card as AppCard } from '@app/components'
import React from 'react'

export default {
  component: AppCard,
  title: 'components/Card',
}

export const Card = (args: any) => (
  <AppCard {...args} title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </AppCard>
)
