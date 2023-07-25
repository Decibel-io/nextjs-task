import { CheckableTagProps } from '@app/types'
import { Tag as AntTag } from 'antd'

export const CheckableTag: React.FC<CheckableTagProps> = (props) => <AntTag.CheckableTag {...props} />
