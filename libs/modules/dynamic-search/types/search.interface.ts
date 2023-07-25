import { Any } from '@app/types'
import { FormInstance } from 'antd'
import { IField } from 'libs/modules/dynamic-form'

export enum ESearchType {
  MAIN = 'MAIN',
  FILTER = 'FILTER',
}
export interface SearchDropdownOption {
  label: string
  value?: Any
  options?: {
    label: string
    value: Any
  }[]
}

export interface ISearchAndFilters {
  filters?: {
    fields: IField[]
    form: FormInstance<Any>
  }
  handleSubmit: (type: string, data: Any) => any | void
  extra?: React.ReactNode[]
  search: {
    placeholder?: string
    disabled?: boolean
    options?: SearchDropdownOption[]
  }
}

export interface DynamicFiltersDrawerProps {
  filters?: {
    fields: IField[]
    form: FormInstance<Any>
  }
  handleSubmit: (type: string, data?: Any) => any | void
  open: boolean
  toggleOpen: () => void
}
