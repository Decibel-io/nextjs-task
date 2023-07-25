import { App as AntApp } from 'antd'
import { AppProps } from 'antd/lib/app'

export const App: React.FC<AppProps> = (props) => <AntApp {...props} />

const useApp = AntApp.useApp

export { useApp }
