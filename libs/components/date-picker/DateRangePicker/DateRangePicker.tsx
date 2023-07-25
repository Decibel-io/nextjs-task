import { TimeRangePickerProps } from '@app/types'
import { DatePicker as AntDatePicker } from 'antd'

const { RangePicker: AntRangePicker } = AntDatePicker

export const DateRangePicker: React.FC<TimeRangePickerProps> = (props) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  <AntRangePicker {...props} />
)
