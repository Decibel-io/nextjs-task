import { CarouselProps } from '@app/types'
import { Carousel as AntCarousel } from 'antd'

export const Carousel: React.FC<CarouselProps> = (props) => <AntCarousel {...props} />
