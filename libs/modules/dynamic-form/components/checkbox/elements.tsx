import { CheckboxGroup } from '@app/components'
import { CheckboxGroupProps } from '@app/types'
import styled from 'styled-components'

export const StyledCheckboxGroup = styled((props: CheckboxGroupProps) => <CheckboxGroup {...props} />)`
  flex-direction: column;
  .ant-checkbox-group-item {
    margin-left: 0;
    padding-top: 5px;
  }
`
