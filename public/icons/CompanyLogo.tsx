import { Image } from '@app/components'
import React from 'react'

export const CompanyLogo: React.FC<{ height?: number }> = ({ height = 50 }) => {
  return <Image preview={false} src="../images/turing-logo.png" style={{ height }} />
}
