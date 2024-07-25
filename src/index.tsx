import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './components/base/error/ErrorBoundary'
import { store } from './redux/store'
import './index.css'
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
)
