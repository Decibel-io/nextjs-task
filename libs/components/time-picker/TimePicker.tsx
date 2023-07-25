import { TimePickerProps } from '@app/types'
import { TimePicker as AntTimePicker } from 'antd'

export const TimePicker: React.FC<TimePickerProps> = (props) => <AntTimePicker {...props} />
