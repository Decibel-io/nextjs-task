import { Image } from '@app/components'
import React from 'react'

export const EuropeanFlagIcon: React.FC<{ height?: number }> = ({ height = 40 }) => {
  return <Image preview={false} src="../images/european-flag.png" style={{ height: height }} />
}
