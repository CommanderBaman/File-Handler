import styles from './styles/personalTab.module.css'
import { useAuth } from '../../../components/Authenticator'
import RequestLogin from '../../../components/RequestLogin'

const PersonalTab = () => {
  const user = useAuth()
  return user.isAuthenticated() ? (
    <div className={styles.personalTabWrapper}>PersonalTab</div>
  ) : (
    <RequestLogin />
  )
}

export default PersonalTab
