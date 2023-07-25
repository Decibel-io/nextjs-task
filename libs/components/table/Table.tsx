import { TableProps } from '@app/types'
import { Table as AntTable } from 'antd'

export const Table: React.FC<TableProps> = (props) => {
  return <AntTable {...props} />
}
