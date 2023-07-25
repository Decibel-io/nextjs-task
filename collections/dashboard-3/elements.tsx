import { Col, Row, Space, Tag } from '@app/components'
import { maxExtraSmall } from '@app/styles'
import { ColProps, RowProps, SpaceProps, TagProps } from '@app/types'
import styled from 'styled-components'

export const StyledTag = styled((props: TagProps) => <Tag {...props} />)`
  padding: 5px 10px;
`
export const StyledSpace = styled((props: SpaceProps) => <Space {...props} />)`
  flex-wrap: wrap;
  display: flex;
`
export const FilterCol = styled((props: ColProps) => <Col {...props} />)`
  align-items: center;
  display: flex;
`
export const StyledRow = styled((props: RowProps) => <Row {...props} />)`
  @media only screen and (max-width: ${maxExtraSmall}) {
    margin-bottom: 140px;
  }
`
