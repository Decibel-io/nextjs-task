import { FormItem, Image, Modal, Text, Upload } from '@app/components'
import { Any, ImageUploaderProps, UploadProps } from '@app/types'
import { useState } from 'react'

import { UploadIconBlue } from '~public'

import { StyledCard, StyledSpace } from './elements'

export const DFUploader: React.FC<ImageUploaderProps> = ({ title, name }) => {
  const [selectedFile, setSelectedFile] = useState<Any>({})
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleChange: UploadProps['onChange'] = ({ fileList }) => {
    setUploading(true)
    const newFileIndex = fileList.length - 1
    const newFile = fileList && fileList[newFileIndex]
    if (newFile?.status === 'done') {
      setSelectedFile((prev) => ({
        ...prev,
        [name]: newFile,
      }))
    }
    setUploading(false)
  }

  const beforeUpload = (file) => {
    if (file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg') {
      return true
    } else {
      return false
    }
  }

  const handlePreview = async (file) => {
    setPreviewImage(URL.createObjectURL(selectedFile[name].originFileObj as File))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const handleCancel = () => setPreviewOpen(false)
  const handleRemove = () => setSelectedFile({})

  return (
    <FormItem label={title}>
      <StyledCard>
        <Upload
          multiple={false}
          accept="image/png, image/jpeg, image/jpg"
          beforeUpload={beforeUpload}
          listType="picture-card"
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={handleRemove}
        >
          {!selectedFile[name] && !uploading && (
            <StyledSpace direction="vertical" size={'small'} className="app-test">
              <UploadIconBlue />
              <Text>{title}</Text>
              <Text type="secondary">JPG, JPEG, PNG, less than 5.5MB</Text>
            </StyledSpace>
          )}
        </Upload>
      </StyledCard>
      {selectedFile[name] && (
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <Image width={'100%'} alt="preview-image" src={previewImage} preview={false} />
        </Modal>
      )}
    </FormItem>
  )
}
