import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;