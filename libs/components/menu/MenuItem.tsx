import { MenuItemProps } from '@app/types'
import { Menu as AntMenu } from 'antd'

export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => <AntMenu.Item {...props} />
