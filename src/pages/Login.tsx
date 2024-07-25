import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { authenticate } from '../reducers/slice/authSlice'
import { useAppDispatch } from '../redux/store'

type Props = {}

const Login = ({}: Props) => {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('Tta@123')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirectRouter = searchParams.get('return') || '/'
  const login = async () => {
    await dispatch(authenticate())
    navigate(redirectRouter)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h2 style={{ color: 'var(--color-A700)', textAlign: 'center' }}>Login</h2>
      Username:
      <input
        style={{ padding: '8px 16px', fontSize: 16, color: 'black' }}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      Password:
      <input
        style={{ padding: '8px 16px', fontSize: 16, color: 'black' }}
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{
          marginTop: 20,
          padding: '8px 16px',
          fontSize: 16,
          background: 'var(--color-A700)',
          color: '#fff',
        }}
        onClick={login}
      >
        Login
      </button>
    </div>
  )
}

export default Login
