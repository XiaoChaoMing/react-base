// import i18next from 'i18next'
// import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
// import historyNote from './release/history.json'
// import metadata from './release/metadata.json'
import Router from './router/Router'

import { useEffect } from 'react'
import ErrorBoundry from './components/base/error/ErrorBoundary'
import i18n from './i18n'
import { setLanguge } from './reducers/slice/themeLanguageSlice'
import { RootState, useAppDispatch, useAppSelector } from './redux/store'
import './App.scss'
import 'antd/dist/reset.css'
import './theme/default-theme.scss'
import './theme/pink-theme.scss'
import './theme/purple-theme.scss'
import './theme/red-theme.scss'
import LoadingBar from './components/base/loading/LoadingBar'
const App = () => {
  const theme = useAppSelector((state: RootState) => state.themeLanguage.theme)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLanguge(i18n.resolvedLanguage))
  }, [])

  return (
    <ErrorBoundry>
      <I18nextProvider i18n={i18n}>
        <div className="App" data-theme={theme}>
          <LoadingBar />
          <Router />
        </div>
      </I18nextProvider>
    </ErrorBoundry>
  )
}

export default App
