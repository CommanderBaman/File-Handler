import { useState } from 'react'
import styles from './styles/editUser.module.css'

const EditUser = () => {
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
    </div>
  )
}

export default EditUser
