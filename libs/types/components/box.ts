import { AriaAttributes, Ref } from 'react'

type DivElProps = JSX.IntrinsicElements['div'] & AriaAttributes

export interface BoxProps extends DivElProps {
  ref?: Ref<HTMLDivElement>
}
