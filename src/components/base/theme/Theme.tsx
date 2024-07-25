import { setTheme } from '../../../reducers/slice/themeLanguageSlice'
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store'

type Props = {}

const Theme = (_props: Props) => {
  const theme = useAppSelector((state: RootState) => state.themeLanguage.theme)
  const dispatch = useAppDispatch()
  return (
    <select
      value={theme}
      onChange={(e: any) => {
        dispatch(setTheme(e.target.value))
      }}
    >
      <option value="default">Default Theme</option>
      <option value="red">Red Theme</option>
      <option value="purple">Purple Theme</option>
      <option value="pink">Pink theme</option>
    </select>
  )
}

export default Theme
