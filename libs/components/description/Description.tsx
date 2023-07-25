import { DescriptionItemProps, DescriptionProps } from '@app/types'
import React from 'react'

import { StyledDescription, StyledDescriptionItem } from './elements'

export const Description: React.FC<DescriptionProps> = (props) => <StyledDescription {...props} />

export const DescriptionItem: React.FC<DescriptionItemProps> = (props) => {
  return <StyledDescriptionItem {...props} />
}
