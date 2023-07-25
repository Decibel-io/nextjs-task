import { LinkProps as NextLinkProps } from 'next/link'

export type LinkElProps = JSX.IntrinsicElements['a']

export type LinkProps = NextLinkProps & Omit<LinkElProps, 'href' | 'type'>
