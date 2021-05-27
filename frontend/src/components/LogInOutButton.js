import { useAuth } from './Authenticator'
import { useHistory } from 'react-router-dom'

import styles from './styles/logInOutButton.module.css'

const LogInOutButton = () => {
  const user = useAuth()
  const userHistory = useHistory()
  const onUserClick = () => {
    if (user.isAuthenticated()) {
      user.signOut()
      // back to main page if he is signed out
      userHistory.push('/')
    } else {
      // go to login page
      userHistory.push('/login')
    }
  }

  return (
    <button onClick={onUserClick} className={styles.mainButton}>
      {user.isAuthenticated() ? 'Sign Out' : 'Sign In'}
    </button>
  )
}

export default LogInOutButton
