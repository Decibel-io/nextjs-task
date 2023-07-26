import {
  Col,
  Row,
  Space,
  Spacer,
  Text,
  TextArea,
  Title,
  Button,
  Notification,
} from '@app/components'
import { useState } from 'react'
import { API } from 'libs/apis'

export const PhysicalCardOrder = ({ call, accessToken }) => {
  const [noteText, setNoteText] = useState<string>('')

  const handleNoteChange = (e) => {
    setNoteText(e.target.value)
  }
  const saveNote = async () => {
    const response = await API.CALL_REQUESTS.ADD_NOTE(call.id, noteText, accessToken)
    Notification({
      message: 'Note Saved!',
      type: 'success',
      duration: 2,
    })
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Call Details</Title>
        <Space direction="vertical">
          <Text type="secondary">Call ID: {call.id}</Text>
          <Text type="secondary">Caller: {call.from}</Text>
        </Space>
      </Col>
      <Col span={24}>
        <Spacer />
        <Title level={4}>Add Note</Title>
        <TextArea placeholder="Write here" onChange={handleNoteChange} />
      </Col>
      <Col span={24}>
        <Spacer />
        <Button onClick={() => saveNote()}>Save</Button>
      </Col>
    </Row>
  )
}
