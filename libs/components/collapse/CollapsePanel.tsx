import { CollapsePanelProps } from '@app/types'
import { Collapse as AntCollapse } from 'antd'

const { Panel: AntCollapsePanel } = AntCollapse

export const CollapsePanel: React.FC<CollapsePanelProps> = (props) => <AntCollapsePanel {...props} />
