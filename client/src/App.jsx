import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageWrapper from "./pages/PageWrapper";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Routes location={location}>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route
              index
              element={
                <AnimatePresence mode="wait" initial={false}>
                  <Dashboard key="dashboard" />
                </AnimatePresence>
              }
            />
          </Route>

          <Route element={<PublicRoute />}>
            <Route
              path="/login"
              element={
                <AnimatePresence mode="wait" initial={false}>
                  <PageWrapper key="login">
                    <Login />
                  </PageWrapper>
                </AnimatePresence>
              }
            />
            <Route
              path="/register"
              element={
                <AnimatePresence mode="wait" initial={false}>
                  <PageWrapper key="register">
                    <Register />
                  </PageWrapper>
                </AnimatePresence>
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
