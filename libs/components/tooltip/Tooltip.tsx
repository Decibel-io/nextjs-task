import { TooltipProps } from '@app/types'
import { Tooltip as AntTooltip } from 'antd'

export const Tooltip: React.FC<TooltipProps> = (props) => <AntTooltip {...props} />
