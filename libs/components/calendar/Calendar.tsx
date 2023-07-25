import { CalendarProps } from '@app/types'
import { Calendar as AntCalendar } from 'antd'

export const Calendar: React.FC<CalendarProps> = (props) => <AntCalendar {...props} />
