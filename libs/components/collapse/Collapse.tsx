import { CollapseProps } from '@app/types'
import { Collapse as AntCollapse } from 'antd'

export const Collapse: React.FC<CollapseProps> = (props) => <AntCollapse {...props} />
