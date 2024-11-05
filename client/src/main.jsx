import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { ToastContextProvider } from './contexts/ToastContext.jsx'
import { TagContextProvider } from './contexts/TagContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <AuthContextProvider>
          <ToastContextProvider>
          <TagContextProvider>
            <App />
           </TagContextProvider>
           </ToastContextProvider>
        </AuthContextProvider>
      </Router>  
  </StrictMode>,
)
