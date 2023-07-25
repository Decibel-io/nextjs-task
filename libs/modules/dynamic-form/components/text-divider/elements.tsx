import { Divider } from '@app/components'
import { DividerProps } from '@app/types'
import styled from 'styled-components'

export const StyledDivider = styled((props: DividerProps) => <Divider {...props} />)`
  margin: 0px !important;
`
