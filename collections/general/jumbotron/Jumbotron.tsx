import { Col, Input, Row, Title } from '@app/components'
import { IStore } from '@app/redux'
import { useSelector } from 'react-redux'

import { StyledButton, StyledCard } from './elements'

export const Jumbotron = ({ title }) => {
  const { color, theme } = useSelector((state: IStore) => state)
  return (
    <StyledCard>
      <Row>
        <Col span={24}>
          <Title level={1} style={{ color: color.white }}>
            {title}
          </Title>
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            <Col span={24} sm={12} md={10} lg={14}>
              <Input value={`https://${theme.dynamicTheme.companyName?.toLowerCase()}.com/invite/u/fd66b6fe`} />
            </Col>
            <Col span={24} sm={12} md={6} lg={6}>
              <StyledButton block>Share</StyledButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledCard>
  )
}
