import Dashboard from './components/Dashboard'
import Header from './components/Header'
import ToggleButton from './components/ToggleButton'
import { DisplayProvider } from './contexts/DisplayContext'
import './App.css'

function App() {

  return (
    <>
      <DisplayProvider>
        <Header>
          <ToggleButton/>
        </Header>
        <Dashboard>
        </Dashboard>
      </DisplayProvider>
    </>
  )
}

export default App
