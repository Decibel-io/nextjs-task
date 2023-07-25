import { TimeRangePickerProps } from '@app/types'
import { TimePicker as AntTimePicker } from 'antd'

export const TimeRangePicker: React.FC<TimeRangePickerProps> = (props) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  <AntTimePicker.RangePicker {...props} />
)
