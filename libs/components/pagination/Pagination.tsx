import { PaginationProps } from '@app/types'
import { Pagination as AntPagination } from 'antd'

export const Pagination: React.FC<PaginationProps> = (props) => <AntPagination {...props} />
