import { Link, Route } from 'react-router-dom'
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes'

type Props = {}

const Admin = (_props: Props) => {
  return (
    <div>
      <Link to={`home`}>home</Link>
      <Link to={`test`}>test</Link>
      <ErrorBoundaryRoutes>
        <Route index={true} element={'home1'} />
        <Route path={'home'} element={'home'} />
        <Route path="test" element={'test'} />
      </ErrorBoundaryRoutes>
    </div>
  )
}

export default Admin
