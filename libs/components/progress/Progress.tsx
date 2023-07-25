import { ProgressProps } from '@app/types'
import { Progress as AntProgress } from 'antd'

export const Progress: React.FC<ProgressProps> = (props) => <AntProgress {...props} />
