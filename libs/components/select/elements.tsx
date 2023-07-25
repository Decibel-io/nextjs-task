import { boxProperties } from '@app/styles'
import { SelectProps } from '@app/types'
import { Select } from 'antd'
import styled from 'styled-components'

export const StyledSelect = styled((props: SelectProps<any>) => {
  return <Select {...props} />
})`
  ${boxProperties}
`
