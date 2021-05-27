import styles from './styles/sharedTab.module.css'
import { useAuth } from '../../../components/Authenticator'
import RequestLogin from '../../../components/RequestLogin'

const SharedTab = () => {
  const user = useAuth()
  return user.isAuthenticated() ? (
    <div className={styles.sharedTabWrapper}>SharedTab</div>
  ) : (
    <RequestLogin />
  )
}

export default SharedTab
