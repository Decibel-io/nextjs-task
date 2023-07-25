import { QRCodeProps } from '@app/types'
import { QRCode as AntQRCode } from 'antd'

export const QRCode: React.FC<QRCodeProps> = (props) => <AntQRCode {...props} />
