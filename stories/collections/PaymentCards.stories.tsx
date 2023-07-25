import React from 'react'

import { CardsAndCTAs as AppCardsAndCTAs } from '~collections'

export default {
  component: AppCardsAndCTAs,
  title: 'collections/CardsAndCTAs',
}

export const CardsAndCTAs = (args: any) => {
  return (
    <>
      <AppCardsAndCTAs {...args} />
    </>
  )
}
