import { TagProps } from '@app/types'
import { Tag as AntTag } from 'antd'

export const Tag: React.FC<TagProps> = (props) => <AntTag {...props} />
