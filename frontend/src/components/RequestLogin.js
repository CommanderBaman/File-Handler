import LogInOutButton from './LogInOutButton'
import styles from './styles/requestLogin.module.css'

const LoginRequest = () => {
  return (
    <div className={styles.requestWrapper}>
      <div className={styles.messageWrapper}>
        In Order to access this, you need to log in
      </div>
      <div className={styles.buttonWrapper}>
        <LogInOutButton />
      </div>
    </div>
  )
}

export default LoginRequest
