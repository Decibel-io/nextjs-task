import { Input } from '@app/components'
import { InputProps } from '@app/types'
import styled from 'styled-components'

export const StyledInput = styled((props: InputProps) => <Input {...props} />)`
  width: 50%;
`
