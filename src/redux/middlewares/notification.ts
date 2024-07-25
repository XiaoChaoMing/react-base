import { defaultTypeSuffixes } from './loadingbar'
import { notification } from 'antd'
const notificationMiddleware = () => (next: any) => (action: any) => {
  const [REJECTED] = defaultTypeSuffixes
  const isRejected = new RegExp(`${REJECTED}$`, 'g')
  if (action.type.match(isRejected)) {
    console.log(action)
    notification.error({ message: 'This is a error message' })
  }

  return next(action)
}

export { notificationMiddleware }
