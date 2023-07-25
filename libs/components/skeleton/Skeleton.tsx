import { SkeletonProps } from '@app/types'
import { Skeleton as AntSkeleton } from 'antd'

export const Skeleton: React.FC<SkeletonProps> = (props) => <AntSkeleton {...props} />
