import { Link } from 'react-router-dom'
import { useAuth } from './Authenticator'

import styles from './styles/userInfo.module.css'

const UserInfo = () => {
  const user = useAuth()
  return user.isAuthenticated() ? (
    <div className={styles.userInfoWrapper}>
      <div className={styles.userImage}>Image</div>
      <Link to='/user'>
        <div className={styles.userName}>{user.userInfo.name}</div>
      </Link>
    </div>
  ) : (
    <div className={styles.userInfoWrapper}></div>
  )
}

export default UserInfo
