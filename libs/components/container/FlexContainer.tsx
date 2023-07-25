import { FlexContainerProps } from '@app/types'
import { forwardRef } from 'react'

import { StyledFlexContainer } from './elements'

export const FlexContainer: React.FC<FlexContainerProps> = forwardRef<HTMLDivElement, FlexContainerProps>(
  (props, ref) => <StyledFlexContainer {...props} ref={ref} />,
)
