import './App.css'
import Navbar from './components/Navbar'
import Authenticator from './components/Authenticator'
import Downloader from './pages/Downloader'

const App = () => {
  return (
    <Authenticator>
      <Navbar />
      <Downloader />
    </Authenticator>
  )
}

export default App
