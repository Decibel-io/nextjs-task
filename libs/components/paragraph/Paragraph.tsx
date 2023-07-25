import { ParagraphProps } from '@app/types'
import { Typography as AntTypography } from 'antd'

export const Paragraph: React.FC<ParagraphProps> = (props) => <AntTypography.Paragraph {...props} />
