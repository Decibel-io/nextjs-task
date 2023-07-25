import { CardProps } from '@app/types'
import { Card as AntCard } from 'antd'

export const Card: React.FC<CardProps> = (props) => <AntCard {...props} />
