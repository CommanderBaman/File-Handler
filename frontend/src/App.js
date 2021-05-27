import './App.css'
import Navbar from './components/Navbar'
import Authenticator from './components/Authenticator'
import Downloader from './pages/Downloader'
import Uploader from './pages/Uploader'
import Login from './pages/Login'
import CreateUser from './pages/User/Create'
import User from './pages/User'
import EditUser from './pages/User/Edit'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <Authenticator>
      <BrowserRouter>
        <Navbar />

        {/* Router View */}
        <Switch>
          <Route exact path='/'>
            <Uploader />
          </Route>
          <Route path='/download'>
            <Downloader />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/user'>
            <User />
          </Route>
          <Route path='/user/create'>
            <CreateUser />
          </Route>
          <Route path='/user/edit'>
            <EditUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </Authenticator>
  )
}

export default App
