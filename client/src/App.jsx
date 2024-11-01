import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import DashWrapper from './pages/DashWrapper';
import PageWrapper from './pages/PageWrapper';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation(); // Use location to track path changes

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<DashWrapper><Dashboard /></DashWrapper>} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
