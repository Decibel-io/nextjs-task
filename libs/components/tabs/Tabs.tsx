import { TabsProps } from '@app/types'
import { Tabs as AntTabs } from 'antd'

export const Tabs: React.FC<TabsProps> = (props) => <AntTabs animated {...props} />
