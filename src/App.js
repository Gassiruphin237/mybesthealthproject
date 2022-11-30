import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Footer from './component/nav/Footer'
import ForgotPaswordEmail from './pages/ForgotPaswordEmail'
import ResetPassword from './pages/ResetPassword'
import Account from './pages/Account';
import Profile from './pages/Profile';
import Home from './pages/Home';
import AuthenticatedRoutes from './component/AuthenticatedRoutes';
import hasAuthenticated from './component/services/AuthApi'
import Auth from './utiles/Auth'
import './App.css'
import Succes from './pages/registration/Succes';
import StepContext from './StepContext';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())
  return (
    <Auth.Provider value={isAuthenticated}>
      <div className='appStyle'>
        <div className='routeStyle'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<StepContext />} />
            <Route path="/succes" element={<Succes />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPaswordEmail />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Auth.Provider>
  );
}

export default App;
