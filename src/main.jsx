import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Principal from './pages/Principal/Principal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
)
