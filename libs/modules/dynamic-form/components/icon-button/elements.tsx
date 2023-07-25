import { Button } from '@app/components'
import { ButtonProps } from '@app/types'
import styled from 'styled-components'

export const StyledIconButton = styled((props: ButtonProps) => <Button {...props} />)`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`
