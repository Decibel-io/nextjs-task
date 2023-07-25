import { Button, Card } from '@app/components'
import { ButtonProps, CardProps } from '@app/types'
import styled from 'styled-components'

export const StyledCard = styled((props: CardProps) => <Card {...props} />)`
  background: ${(props) => `linear-gradient(0.7turn, ${props.theme.color.primary}, ${props.theme.color.secondary})`};
  padding: 100px 10px 10px 10px;
`

export const StyledButton = styled((props: ButtonProps) => <Button {...props} />)`
  background: ${(props) => props.theme.color.secondary};
`
