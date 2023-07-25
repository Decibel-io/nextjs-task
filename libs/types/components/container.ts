import { Ref } from 'react'

import { BoxProperties } from '../css'

type DivElProps = JSX.IntrinsicElements['div']
export interface ContainerProps extends DivElProps, BoxProperties {
  ref?: Ref<HTMLDivElement>
  fluid?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kind?: any //Please specify a type here - disabling for now
}

export interface FlexContainerProps extends DivElProps, BoxProperties {
  ref?: Ref<HTMLDivElement>
  inline?: boolean
  index?: number
}
