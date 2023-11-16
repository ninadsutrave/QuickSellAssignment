import { DisplayProvider } from './contexts/DisplayContext'

import Header from './sections/Header'
import DisplayButton from './components/DisplayButton'

import Dashboard from './sections/Dashboard'
import KanbanBoard from './components/KanbanBoard'

import './App.css'

const App = () => {
  return (
    <div className="kanban-wrapper">
      <DisplayProvider>
        <Header>
          <DisplayButton/>
        </Header>
        <Dashboard>
          <KanbanBoard/>
        </Dashboard>
      </DisplayProvider>
    </div>
  )
}

export default App
