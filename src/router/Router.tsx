import { Route } from 'react-router-dom'
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes'
import { AUTHORITIES } from '../constants/constants'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import PrivateRouter from './PrivateRouter'

const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route
        index={true}
        element={
          <PrivateRouter hasAnyAuthorities={[AUTHORITIES.USER]}>
            <Home />
          </PrivateRouter>
        }
      />
      <Route path="login" element={<Login />} />
      <Route
        path="admin/*"
        element={
          <PrivateRouter hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]}>
            <Admin />
          </PrivateRouter>
        }
      />

      <Route path="*" element={<NotFound />} />
    </ErrorBoundaryRoutes>
  )
}

export default Router
