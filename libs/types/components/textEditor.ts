export interface TextEditorProps {
  onDescriptionChange: (descrition: string) => void
  editContent?: string
  sentence?: string
  setSentence?: (sentence: string) => void
  placeholder?: string
  fontSize?: string
  maxLength?: number
}
