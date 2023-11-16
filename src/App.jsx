import Dashboard from './components/Dashboard'
import Header from './components/Header'
import ToggleButton from './components/ToggleButton'
import { DisplayProvider } from './contexts/DisplayContext'
import './App.css'

function App() {

  return (
    <div className="kanban-wrapper">
      <DisplayProvider>
        <Header>
          <ToggleButton/>
        </Header>
        <Dashboard>
        </Dashboard>
      </DisplayProvider>
    </div>
  )
}

export default App
