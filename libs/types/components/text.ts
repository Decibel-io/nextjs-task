import { TextProps as AntdTextProps } from 'antd/lib/typography/Text'
import { Dispatch, SetStateAction } from 'react'

import { MakeRequired } from '../general'

export type TextProps = AntdTextProps

export type ClickableTextProps = MakeRequired<TextProps, 'aria-label'>

export interface EditableTextProps {
  editableStr: string
  setEditableStr: Dispatch<SetStateAction<string>>
}
