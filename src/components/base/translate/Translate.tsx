import { useTranslation } from 'react-i18next'

type Props = {
  contentKey: string
  children?: any
}

const Translate = (props: Props) => {
  const { t } = useTranslation()
  return <>{t(props.contentKey)}</>
}

export default Translate
