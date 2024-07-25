type Props = {}
import { Link } from 'react-router-dom'
import Language from '../components/base/language/Language'
import Theme from '../components/base/theme/Theme'
import Translate from '../components/base/translate/Translate'
import { setAuthentication } from '../reducers/slice/authSlice'
import { useAppDispatch } from '../redux/store'
import metadata from '../Release/metadata.json'
const colors = [
  '--color-50',
  '--color-100',
  '--color-200',
  '--color-300',
  '--color-400',
  '--color-500',
  '--color-600',
  '--color-700',
  '--color-800',
  '--color-900',
  '--color-A100',
  '--color-A200',
  '--color-A400',
  '--color-A700',
]
const Home = ({}: Props) => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1 className="version">
        <Translate contentKey="welcome.title" />
      </h1>
      <div className="version">{`Version ${metadata.version}`}</div>
      <div>
        {colors.map((i) => (
          <div
            key={i}
            style={{
              width: 400,
              height: 40,
              lineHeight: '40px',
              background: `var(${i})`,
              textAlign: 'center',
            }}
          >
            {i}
          </div>
        ))}
        <Theme />
        <Language />
        <button
          onClick={() => {
            dispatch(setAuthentication(false))
          }}
        >
          Logout
        </button>

        <button
          onClick={() => {
            throw new Error('I crashed!')
          }}
        >
          Throw error
        </button>
        <Link to={'admin'}>admin</Link>
      </div>
    </div>
  )
}

export default Home
