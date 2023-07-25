import { Link, MetaData, Text, Title } from '@app/components'
import { IMetaData } from '@app/types'
import { Col, Row } from 'antd'
import { NextPage } from 'next'

const meta: IMetaData = {
  description:
    'The page you are looking for might have been removed, had it`s name changed or is temporarily unavailable.',
  title: '404',
  url: '/404',
}

const Error404Page: NextPage = () => (
  <>
    <MetaData {...meta} />
    <Row style={{ height: '100%' }} justify={'center'} align={'middle'}>
      <Col span={24} xl={12}>
        <Row justify={'center'}>
          <Col>
            <Title>Hmm... our magic seems to be off</Title>
          </Col>
          <Col>
            <Text>Apologies, something unexpected occurred here. Please try again later</Text>
          </Col>
          <Col>
            <Text>
              Please visit us for more information - <Link href={''}>Contact Us</Link>
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  </>
)

export default Error404Page
