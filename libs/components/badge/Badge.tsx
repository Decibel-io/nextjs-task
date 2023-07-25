import { BadgeProps } from '@app/types'
import { Badge as AntBadge } from 'antd'

export const Badge: React.FC<BadgeProps> = (props) => <AntBadge {...props} />
