import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
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