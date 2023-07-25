import { MenuProps } from '@app/types'
import { Menu as AntMenu } from 'antd'

export const Menu: React.FC<MenuProps> = (props: MenuProps) => <AntMenu {...props} />
