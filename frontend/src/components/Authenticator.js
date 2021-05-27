import { createContext, useContext, useState } from 'react'

/**
 * Object that contains all the authentication details
 * Referred as auth object
 */
const authContextDetails = {
  isAuthenticated: false,
  signIn(funcCall) {
    authContextDetails.isAuthenticated = true
    funcCall()
  },
  signOut(funcCall) {
    authContextDetails.isAuthenticated = false
    funcCall()
  }
}

const authContext = createContext()

/**
 * Hook for child components to get the auth object
 * and re-render when it changes.
 * @returns auth object
 */
export const useAuth = () => useContext(authContext)

/**
 * Provider hook that creates auth object and handles state
 * @returns auth object and state handlers
 */
const useProvideAuth = () => {
  const [userInfo, setUser] = useState(null)

  const signIn = () =>
    authContextDetails.signIn(() => {
      setUser({
        id: '123423',
        name: 'Demo User'
      })
    })

  const signOut = () =>
    authContextDetails.signOut(() => {
      setUser(null)
    })

  const isAuthenticated = () => userInfo !== null

  return {
    userInfo,
    isAuthenticated,
    signIn,
    signOut
  }
}

/**
 * Component to make auth object available to any
 * child component that calls useAuth()
 * @param {*} param0 Children in the tree
 * @returns JSX element
 */
const Authenticator = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default Authenticator
