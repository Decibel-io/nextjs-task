import { ReactNode } from 'react'

export interface DynamicListProps {
  radioList?: boolean
  border?: boolean
  header?: JSX.Element
  extra?: (item?: any) => JSX.Element
  listData: {
    icon: JSX.Element
    title: string
    description?: string | ReactNode
    moreInfo?: {
      amount?: number
      currency?: string
    }
    hideExtra?: boolean //to hide extra content on specific listItem
  }[]
}
