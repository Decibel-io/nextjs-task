import { ModalProps } from '@app/types'
import { Modal as AntModal } from 'antd'

export const Modal: React.FC<ModalProps> = (props) => <AntModal {...props} />
