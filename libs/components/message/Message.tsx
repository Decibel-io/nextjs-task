import { message } from 'antd'
import { ArgsProps } from 'antd/lib/message'

export const Message = (props: ArgsProps) => {
  return message.open({
    ...props,
  })
}
