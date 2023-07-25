import { TabPaneProps } from '@app/types'
import { Tabs as AntTabs } from 'antd'

export const TabPane: React.FC<TabPaneProps> = (props) => <AntTabs.TabPane {...props} />
