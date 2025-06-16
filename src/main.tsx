import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Counter} from './components/Counter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>My React Notes App</h1>
    <Counter />
  </StrictMode>,
)
