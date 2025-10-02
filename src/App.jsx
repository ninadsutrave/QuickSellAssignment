import { useEffect } from 'react'
import { DisplayProvider } from './contexts/DisplayContext'

import Header from './sections/Header'
import DisplayButton from './components/DisplayButton'

import Dashboard from './sections/Dashboard'
import KanbanBoard from './components/KanbanBoard'

import './App.css'

const App = () => {
    useEffect(() => {
      try {
      // This runs only once on first mount
      if (import.meta && import.meta.env) {
        console.log("Vite frontend env variables:");
        Object.keys(import.meta.env).forEach((key) => {
          console.log(key, "=", import.meta.env[key]);
        });
      } else {
        console.log("No variables found!");
      }
    } catch (err) {
    console.log("Error reading env variables");
    console.error(err);
  }
  }, []);

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
