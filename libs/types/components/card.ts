import { CardMetaProps as AntCardMetaProps, CardProps as AntCardProps } from 'antd/lib/card'

type DivElProps = Omit<JSX.IntrinsicElements['div'], 'ref'>

export type CardMetaProps = DivElProps & AntCardMetaProps

export type CardProps = AntCardProps
