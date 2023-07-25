import { RowProps } from '@app/types'
import { Row as AntRow } from 'antd'

export const Row: React.FC<RowProps> = (props) => <AntRow gutter={[24, 24]} {...props} />
