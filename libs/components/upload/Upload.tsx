import { UploadProps } from '@app/types'
import { Upload as AntUpload } from 'antd'

export const Upload: React.FC<UploadProps> = (props) => <AntUpload {...props} />
