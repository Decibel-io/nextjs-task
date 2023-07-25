import { ButtonProps } from '@app/types'
import { Button as AntButton } from 'antd'
import { forwardRef } from 'react'
import styled from 'styled-components'

export const StyledButton = styled(
  forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    return (
      <AntButton ref={ref} type={props?.type || 'primary'} {...props}>
        {children}
      </AntButton>
    )
  }),
)`
  -goog-ms-box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -webkit-tap-highlight-color: none !important;
  box-shadow: none !important;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
`
