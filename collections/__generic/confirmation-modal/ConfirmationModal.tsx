import { Button, Modal, Row, Text } from '@app/components'
import { ConfirmationModalProps } from '@app/types'
import { useEffect, useState } from 'react'

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  onCancel,
  modalTitle,
  confirmButtonText,
  cancelButtonText,
  onOk,
  open,
  message,
  loading,
}) => {
  const [progressLoading, setProgressLoading] = useState(false)
  useEffect(() => {
    if (loading !== undefined) {
      setProgressLoading(loading)
    }
  }, [loading])

  return (
    <Modal
      zIndex={10005}
      title={modalTitle || 'Confirmation'}
      maskClosable={false}
      onCancel={onCancel}
      centered
      onOk={onOk}
      open={open}
      footer={
        <Row justify="end">
          <Button type="default" onClick={onCancel} size="small">
            {cancelButtonText || 'Cancel'}
          </Button>
          <Button danger onClick={onOk} loading={progressLoading} size="small">
            {confirmButtonText || 'Delete'}
          </Button>
        </Row>
      }
    >
      <Text>{message}</Text>
    </Modal>
  )
}
