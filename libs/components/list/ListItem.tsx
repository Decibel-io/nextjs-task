import { ListItemProps } from '@app/types'
import { List as AntList } from 'antd'

export const ListItem: React.FC<ListItemProps> = (props) => <AntList.Item {...props} />
