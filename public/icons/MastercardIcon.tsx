import { Image } from '@app/components'
import React from 'react'

export const MastercardIcon: React.FC<{ height?: number }> = ({ height = 40 }) => {
  return <Image preview={false} src="../images/mastercard.png" style={{ height: height }} />
}
