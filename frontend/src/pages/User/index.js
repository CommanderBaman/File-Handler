import styles from './styles/user.module.css'
import { Link } from 'react-router-dom'

const UserInfo = () => {
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
