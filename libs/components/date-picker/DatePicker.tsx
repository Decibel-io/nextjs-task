import { DatePickerProps } from '@app/types'
import { DatePicker as AntDatePicker } from 'antd'

export const DatePicker: React.FC<DatePickerProps> = (props) => <AntDatePicker {...props} />
