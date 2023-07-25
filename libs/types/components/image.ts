type ImageKind = 'avatar' | 'fluid' | 'raised'

type ImageElProps = JSX.IntrinsicElements['img']

interface ImageBase extends Omit<ImageElProps, 'height' | 'width' | 'alt'> {
  kind?: ImageKind
  objectFit?: 'cover' | 'contain' | 'initial' | 'none'
  placeholder?: string
  alt: string
}
export type ImageProps = ImageBase
