import { Image } from '@app/components'
import React from 'react'

export const VisaIcon: React.FC<{ height?: number }> = ({ height = 40 }) => {
  return <Image preview={false} src="../images/visa.png" style={{ height: height }} />
}
