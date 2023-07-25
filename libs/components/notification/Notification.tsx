import { notification } from 'antd'
import { ArgsProps } from 'antd/lib/notification/interface'

export const Notification = (props: ArgsProps) => {
  notification.config({
    placement: 'bottomRight',
  })

  return notification.open({
    ...props,
  })
}
