import { Button, Icon, Upload as AppUpload } from '@app/components'
import React from 'react'

export default {
  component: AppUpload,
  title: 'components/Upload',
}

export const Upload = (args: any) => {
  return (
    <AppUpload {...args}>
      <Button icon={<Icon.UploadOutlined />}>Click to Upload</Button>
    </AppUpload>
  )
}
