import { Card, Col, PageHeader, Progress, Row, Space, Spacer, Statistic, Text, Title, Tooltip } from '@app/components'
import { IStore } from '@app/redux'
import { useSelector } from 'react-redux'
import { ControlTable } from './control-table'
import { StyledRow } from './elements'

export const Dashboard3 = () => {
  const { color, theme } = useSelector((state: IStore) => state)



  return (
    <StyledRow justify={'center'}>
      <Col span={22} >
        <Title>Turing Technologies</Title>
      </Col>
      <Col span={24}>
        <ControlTable/>
      </Col>
    </StyledRow>
  )
}
