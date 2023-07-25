export interface ConfirmationModalProps {
  modalTitle?: string
  onCancel: () => void
  onOk: () => void
  open: boolean
  message: string
  loading?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
}
