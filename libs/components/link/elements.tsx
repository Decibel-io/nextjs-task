import { IStore } from '@app/redux'
import { LinkElProps } from '@app/types'
import { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const StyledLink = styled(
  forwardRef<HTMLAnchorElement, LinkElProps>(({ children, ...props }, ref) => {
    const { theme } = useSelector((state: IStore) => state)
    return (
      <a {...props} {...theme} ref={ref}>
        {children}
      </a>
    )
  }),
)`
  color: ${(props) => props.theme.color.primary};
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.theme.color.primary};
    text-decoration: underline;
  }
`
