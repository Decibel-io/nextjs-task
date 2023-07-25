import { WatermarkProps } from '@app/types'
import { Watermark as AntWatermark } from 'antd'

export const Watermark: React.FC<WatermarkProps> = (props) => <AntWatermark {...props} />
