import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homebar from './pages/Home';
import Loginform from './pages/Login';
import Register from './pages/Register';
import "./style.scss"
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loginform />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              currentUser ? (
                <ProtectedRoute>
                  <Homebar />
                </ProtectedRoute>
              ) : (
                <Loginform />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
