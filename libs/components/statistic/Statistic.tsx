import { StatisticProps } from '@app/types'
import { Statistic as AntStatistic } from 'antd'

export const Statistic: React.FC<StatisticProps> = (props) => <AntStatistic {...props} />
