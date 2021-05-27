import { useState } from 'react'
import styles from './styles/login.module.css'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../../components/Authenticator'

const Login = () => {
  const user = useAuth()
  const userHistory = useHistory()

  const [userName, updateName] = useState('')
  const [password, updatePassword] = useState('')
  const [showFailedMessage, updateFailedMessage] = useState(false)

  const handleNameChange = (event) => {
    updateName(event.target.value)
  }
  const handlePasswordChange = (event) => {
    updatePassword(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    alert(`User: ${userName}\nPassword: ${password}`)
    user.signIn()
    if (user.isAuthenticated()) {
      userHistory.push('/')
    } else {
      updateFailedMessage(true)
    }
  }
  return user.isAuthenticated() ? (
    <Redirect to='/' />
  ) : (
    <div className={styles.loginWrapper}>
      {showFailedMessage && (
        <div className={styles.failedLoginMessage}>
          Invalid Username or password! Try again
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        <label>
          UserName:
          <input
            type='text'
            value={userName}
            onChange={handleNameChange}
          ></input>
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </label>

        <input type='submit' value='Submit' />
      </form>

      <div className={styles.createUserLink}>
        <Link to='/user/create'>New here? Create an account!</Link>
      </div>
    </div>
  )
}

export default Login
