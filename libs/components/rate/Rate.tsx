import { RateProps } from '@app/types'
import { Rate as AntRate } from 'antd'

export const Rate: React.FC<RateProps> = (props) => <AntRate {...props} />
