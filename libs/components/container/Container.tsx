import { ContainerProps } from '@app/types'
import { forwardRef } from 'react'

import { StyledContainer } from './elements'

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => (
  <StyledContainer {...props} ref={ref} />
))
