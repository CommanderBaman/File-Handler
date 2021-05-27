import styles from './styles/login.module.css'
import { Link } from 'react-router-dom'

function UserInfo() {
  return (
    <div className={styles.loginWrapper}>
      User Information

      <div className={styles.editUserLink}>
        <Link to='/user/edit'>Edit Your Profile</Link>
      </div>
    </div>
  )
}

export default UserInfo
