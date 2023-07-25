import { Button } from '@app/components'
import { ButtonProps } from '@app/types'
import styled from 'styled-components'

export const StyledButton = styled((props: ButtonProps) => <Button {...props} type={props.type} />)`
  padding: 13px 56px;
  line-height: 0px;
`
