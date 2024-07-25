import appSlice from '../reducers/app/appSlice'
import authSlice from '../reducers/slice/authSlice'
import loadingBarSlice from '../reducers/slice/loadingBarSlice'
import themeLanguageSlice from '../reducers/slice/themeLanguageSlice'

const rootReducer: any = {
  auth: authSlice,
  themeLanguage: themeLanguageSlice,
  loadingBar: loadingBarSlice,
  app: appSlice,
}
export { rootReducer }
