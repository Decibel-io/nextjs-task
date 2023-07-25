import React from 'react'

import {
  DFCheckbox,
  DFCheckboxGroup,
  DFDatePicker,
  DFDefaultButton,
  DFEmailInput,
  DFIconButton,
  DFInput,
  DFInputNumber,
  DFNavigation,
  DFPasswordInput,
  DFPrimaryButton,
  DFRadio,
  DFRawText,
  DFSelect,
  DFTextArea,
  DFTextDivider,
  DFTitle,
  DFUploader,
} from './components'
import { DFColorPicker } from './components/color-picker'
import { DFImageCard } from './components/image-card'
import { DynamicInputProps, EDynamicFormField } from './types'

export const DynamicInput: React.FC<DynamicInputProps> = ({ field, onCancel, onSubmit, disabled }) => {
  switch (field.type as EDynamicFormField) {
    case EDynamicFormField.INPUT: {
      return <DFInput field={field} disabled={disabled} />
    }
    case EDynamicFormField.COLOR_PICKER: {
      return <DFColorPicker field={field} disabled={disabled} />
    }
    case EDynamicFormField.DATE: {
      return <DFDatePicker field={field} disabled={disabled} />
    }
    case EDynamicFormField.SELECT: {
      return <DFSelect field={field} disabled={disabled} />
    }
    case EDynamicFormField.EMAIL: {
      return <DFEmailInput field={field} disabled={disabled} />
    }
    case EDynamicFormField.PASSWORD: {
      return <DFPasswordInput field={field} disabled={disabled} />
    }
    case EDynamicFormField.CHECKBOX: {
      return <DFCheckbox field={field} disabled={disabled} />
    }
    case EDynamicFormField.CHECKBOX_GROUP: {
      return <DFCheckboxGroup field={field} disabled={disabled} />
    }
    case EDynamicFormField.NAVIGATION: {
      return <DFNavigation field={field} disabled={disabled} />
    }
    case EDynamicFormField.RAW_TEXT: {
      return <DFRawText field={field} disabled={disabled} />
    }
    case EDynamicFormField.TITLE: {
      return <DFTitle field={field} disabled={disabled} />
    }
    case EDynamicFormField.TEXT_DIVIDER: {
      return <DFTextDivider field={field} disabled={disabled} />
    }
    case EDynamicFormField.IMAGE_CARD: {
      return <DFImageCard icon={field.icon} title={field.title} />
    }
    case EDynamicFormField.PRIMARY_BUTTON: {
      return <DFPrimaryButton field={field} onSubmit={onSubmit} />
    }
    case EDynamicFormField.DEFAULT_BUTTON: {
      return <DFDefaultButton field={field} onCancel={onCancel} />
    }
    case EDynamicFormField.ICON_BUTTON: {
      return <DFIconButton field={field} onSubmit={onSubmit} />
    }
    case EDynamicFormField.UPLOADER: {
      return <DFUploader title={field.title} name={field.name} />
    }
    case EDynamicFormField.NUMBER: {
      return <DFInputNumber field={field} disabled={disabled} />
    }
    case EDynamicFormField.RADIO: {
      return <DFRadio field={field} disabled={disabled} />
    }
    case EDynamicFormField.TEXT_AREA: {
      return <DFTextArea field={field} disabled={disabled} />
    }
    default: {
      return <></>
    }
  }
}
