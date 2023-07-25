import { OptionProps } from '@app/types'
import { Select as AntSelect } from 'antd'

export const Option: React.FC<OptionProps> = (props) => <AntSelect.Option {...props} />
