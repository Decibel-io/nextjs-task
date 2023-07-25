import { EmptyProps } from '@app/types'
import { Empty as AntEmpty } from 'antd'

export const Empty: React.FC<EmptyProps> = (props) => <AntEmpty {...props} />
