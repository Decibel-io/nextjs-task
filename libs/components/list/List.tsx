import { Any, ListProps } from '@app/types'
import { List as AntList } from 'antd'

export const List: React.FC<ListProps<Any>> = (props) => <AntList {...props} />
