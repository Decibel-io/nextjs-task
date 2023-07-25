import { boxProperties } from '@app/styles'
import { ContainerProps, FlexContainerProps } from '@app/types'
import { omitCSSProps, omitProps } from '@app/utils'
import { forwardRef } from 'react'
import styled, { css } from 'styled-components'

const baseContainerStyles = css<ContainerProps>`
  margin: 0 auto;
  max-width: calc(1190px + 24px);
  padding: 0 24px;
  width: 100%;
`

const mainContainerStyles = css<ContainerProps>`
  ${baseContainerStyles};

  ${({ fluid }) =>
    fluid &&
    css`
      max-width: 100%;
    `};
`

const containerStyles = css<ContainerProps>`
  ${({ kind }) => {
    switch (kind) {
      default:
        return css`
          ${mainContainerStyles}
        `
    }
  }}
`

export const StyledContainer = styled(
  forwardRef<HTMLDivElement, ContainerProps>(({ children, ...props }, ref) => {
    const restProps = omitProps(props, ['kind'])
    const domProps = omitCSSProps(restProps)
    return (
      <div {...domProps} ref={ref}>
        {children}
      </div>
    )
  }),
)`
  ${containerStyles}
  ${boxProperties};
`

export const StyledFlexContainer = styled(
  forwardRef<HTMLDivElement, FlexContainerProps>((props, ref) => {
    const restProps = omitProps(props, ['inline'])
    const domProps = omitCSSProps(restProps)
    return <div {...domProps} ref={ref} />
  }),
)`
  display: flex;
  ${boxProperties};
`
