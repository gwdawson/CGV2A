import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

import Navigation from './components/Navigation';

import Login from './pages/Login';
import Create from './pages/Create';

function App() {
  const [authentication, setAuthentication] = useState({
    isAuthenticated: false,
    theme: 'dark',
  });

  const { isAuthenticated, theme } = authentication;

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <ToastContainer />
        <Navigation theme={theme} />
        <div className={`page page-${theme}`}>
          <Routes>
            <Route path="/" element={<h1>HOMEPAGE</h1>} />
            <Route path="/login" element={<Navigate to="/profile" />} />
            <Route path="/create" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<h1>PROFILE</h1>} />
            <Route path="/collection" element={<h1>COLLECTION</h1>} />
            <Route path="/store" element={<h1>STORE</h1>} />
            <Route path="/*" element={<h1>404 PAGE NOT FOUND</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<h1>HOMEPAGE</h1>} />
          <Route path="/login" element={<Login theme={theme} setAuthentication={setAuthentication} />} />
          <Route path="/create" element={<Create theme={theme} setAuthentication={setAuthentication} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
