import { boxProperties } from '@app/styles'
import { InputNumberProps } from '@app/types'
import { InputNumber } from 'antd'
import styled from 'styled-components'

export const StyledInputNumber = styled((props: InputNumberProps) => {
  return <InputNumber {...props} />
})`
  ${boxProperties}
`
