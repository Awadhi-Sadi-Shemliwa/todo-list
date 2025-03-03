import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TaskProvider } from '../src/components/TodoList/TaskContext.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
        <App />
      </TaskProvider>
  </StrictMode>,
)
