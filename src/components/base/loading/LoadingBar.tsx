import { Spin } from 'antd'
import { RootState, useAppSelector } from '../../../redux/store'

type Props = {}

const LoadingBar = (_props: Props) => {
  const loadingBar = useAppSelector((store: RootState) => store.loadingBar)
  return loadingBar.show ? <Spin /> : null
}

export default LoadingBar
