import { Image } from '@app/components'
import React from 'react'

export const AmericanFlagIcon: React.FC<{ height?: number }> = ({ height = 40 }) => {
  return <Image preview={false} src="../images/america-flag.png" style={{ height: height }} />
}
