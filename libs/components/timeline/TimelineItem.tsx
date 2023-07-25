import { TimelineItemProps } from '@app/types'
import { Timeline as AntTimeline } from 'antd'

export const TimelineItem: React.FC<TimelineItemProps> = (props) => <AntTimeline.Item {...props} />
