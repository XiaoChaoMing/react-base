import { setLoadingBar } from '../../reducers/slice/loadingBarSlice'

export const defaultTypeSuffixes = ['pending', 'fulfilled', 'rejected']

const loadingBarMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type) {
    const [PENDING, FULFILLED, REJECTED] = defaultTypeSuffixes
    const isPending = new RegExp(`${PENDING}$`, 'g')
    const isFulfilled = new RegExp(`${FULFILLED}$`, 'g')
    const isRejected = new RegExp(`${REJECTED}$`, 'g')
    if (action.type.match(isPending)) {
      store.dispatch(setLoadingBar(true))
    } else if (action.type.match(isFulfilled) || action.type.match(isRejected)) {
      store.dispatch(setLoadingBar(false))
    }
  }

  return next(action)
}

export { loadingBarMiddleware }
