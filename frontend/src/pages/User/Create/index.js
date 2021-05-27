import { useState } from 'react'
import styles from './styles/createUser.module.css'
import { Link } from 'react-router-dom'

const CreateUser = () => {
  const [name, updateName] = useState('')
  const [username, updateUsername] = useState('')
  const [password, updatePassword] = useState('')

  const handleNameChange = (event) => {
    updateName(event.target.value)
  }
  const handleUsernameChange = (event) => {
    updateUsername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    updatePassword(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    alert(`Name: ${name}\nUser: ${username}\nPassword: ${password}`)
  }
  return (
    <div className={styles.loginWrapper}>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type='text' value={name} onChange={handleNameChange}></input>
        </label>
        <label>
          UserName:
          <input
            type='text'
            value={username}
            onChange={handleUsernameChange}
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
        <Link to='/login'>Already Have an Account? Sign In!</Link>
      </div>
    </div>
  )
}

export default CreateUser
