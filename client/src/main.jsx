import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <AuthContextProvider>
         <App />
        </AuthContextProvider>
      </Router>  
  </StrictMode>,
)
