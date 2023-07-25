import { AlertProps } from '@app/types'
import { Alert as AntAlert } from 'antd'

export const Alert: React.FC<AlertProps> = (props) => <AntAlert {...props} />
