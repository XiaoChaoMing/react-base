import i18n from '../../../i18n'
import languagekey from '../../../mocks/ISO-639-1-language.json'
import { setLanguge } from '../../../reducers/slice/themeLanguageSlice'
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store'
type Props = {}

const Language = (_props: Props) => {
  const dispatch = useAppDispatch()
  const language = useAppSelector((state: RootState) => state.themeLanguage.language)
  const resources = i18n.options.resources ? Object.keys(i18n.options.resources) : []
  return (
    <select
      value={language}
      onChange={(e: any) => {
        dispatch(setLanguge(e.target.value))
      }}
    >
      {resources.map((lng, idx) => (
        <option value={lng} key={idx}>
          {languagekey.find((lang) => lang.code === lng)?.name}
        </option>
      ))}
    </select>
  )
}

export default Language
