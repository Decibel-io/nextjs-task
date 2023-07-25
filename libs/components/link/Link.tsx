import { LinkProps } from '@app/types'
import NextLink from 'next/link'

import { StyledLink } from './elements'

export const Link: React.FC<LinkProps> = (props) => {
  const { href, as, 'aria-label': ariaLabel, children, replace, shallow, scroll, prefetch } = props

  if (typeof href === 'string' && !as && (href?.includes('http') || href?.includes('mailto'))) {
    if (props.target === '_blank')
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <StyledLink
          {...props}
          aria-label={`${ariaLabel ?? ''} (Opens in a new window)`}
          rel={'noreferrer noopener'}
          href={href}
        >
          {children}
        </StyledLink>
      )
    else
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <StyledLink aria-label={ariaLabel} href={href} {...props}>
          {children}
        </StyledLink>
      )
  } else {
    return (
      <NextLink passHref href={href} as={as} replace={replace} shallow={shallow} scroll={scroll} prefetch={prefetch}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <StyledLink aria-label={ariaLabel} {...props}>
          {children}
        </StyledLink>
      </NextLink>
    )
  }
}
