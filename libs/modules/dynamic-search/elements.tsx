import { Button, Col, InputSearch, Row } from '@app/components'
import { ButtonProps, ColProps, InputSearchProps, RowProps } from '@app/types'
import styled from 'styled-components'

export const StyledExtraCol = styled((props: ColProps) => <Col {...props} />)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
export const StyledButton = styled((props: ButtonProps) => <Button {...props} />)`
  width: 175px;
`

export const StyledRow = styled((props: RowProps) => <Row {...props} />)``
export const StyledSearch = styled((props: InputSearchProps) => <InputSearch {...props} ref={props.ref} />)`
  .ant-btn-primary {
    box-shadow: none;
  }
`
