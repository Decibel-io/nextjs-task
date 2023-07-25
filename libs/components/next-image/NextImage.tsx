import Image, { ImageProps } from 'next/image'

export const NextImage: React.FC<ImageProps> = (props: ImageProps) => {
  return <Image {...props} />
}
