import { ButtonProps } from '@app/types'
import { forwardRef } from 'react'

import { StyledButton } from './elements'

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => (
  <StyledButton {...props} ref={ref} />
))
