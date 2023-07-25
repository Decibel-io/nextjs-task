import { FormInstance } from 'antd'
import { Dispatch, SetStateAction } from 'react'

export interface RegisterAccountProps {
  currentStep?: number
  setCurrentStep: Dispatch<SetStateAction<number>>
}

export interface AccountRegistrationFooterProps extends RegisterAccountProps {
  form: FormInstance<any>
  buttonText: string
}

export interface ImageUploaderProps {
  title: string
  name: string
}

export interface ImageCardProps {
  icon: JSX.Element
  title: string
}
