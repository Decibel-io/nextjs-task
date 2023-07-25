import { Carousel as AppCarousel } from '@app/components'
import React from 'react'

export default {
  component: AppCarousel,
  title: 'components/Carousel',
}

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

export const Carousel = (args: any) => (
  <AppCarousel {...args} autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </AppCarousel>
)
