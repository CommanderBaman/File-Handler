import './App.css'
import Navbar from './components/Navbar'
import Authenticator from './components/Authenticator'
import Downloader from './pages/Downloader'

function App() {
  return (
    <Authenticator>
      <Navbar />
      <Downloader />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </Authenticator>
  )
}

export default App
