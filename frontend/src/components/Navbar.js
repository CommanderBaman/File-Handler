import styles from './styles/navbar.module.css'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'
import LogInOut from './LogInOutButton'

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navHeader}>
        <h1>File uploader</h1>
      </div>

      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link to='/'>Uploader</Link>
          </li>
          <li>
            <Link to='/download'>Downloader</Link>
          </li>
        </ul>
      </div>

      <div className={styles.navUserInfo}>
        <UserInfo />
      </div>

      <div className={styles.signInOutButton}>
        <LogInOut />
      </div>
    </div>
  )
}

export default Navbar
