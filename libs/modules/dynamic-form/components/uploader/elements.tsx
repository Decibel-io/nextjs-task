import { Card, Space } from '@app/components'
import { CardProps, SpaceProps } from '@app/types'
import styled from 'styled-components'

export const StyledCard = styled((props: CardProps) => <Card {...props} />)`
  align-items: center;
  background: ${(props) => props.theme.color.grey3};
  cursor: pointer;
  display: flex;
  height: 220px;
  justify-content: center;
  && {
    .ant-card-body {
      padding: 0px;
    }
  }
`

export const StyledSpace = styled((props: SpaceProps) => <Space {...props} />)`
  align-items: center;
  display: flex;
`
