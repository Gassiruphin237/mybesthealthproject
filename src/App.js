import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import ForgotPaswordEmail from './pages/ForgotPaswordEmail'
import ResetPassword from './pages/ResetPassword'
import Account from './pages/Account';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './App.css'
import Succes from './pages/registration/Succes';
import StepContext from './StepContext';
import AuthApi from './component/services/AuthApi';
import Acceuil from './pages/Acceuil';



function App() {

  return (
      <div className='appStyle'>
        <div className='routeStyle'>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<StepContext />} />
            <Route path="/succes" element={<Succes />} />
            <Route path="/account" element={<AuthApi view={Account} />} />
            <Route path="/profile" element={<AuthApi view={Profile} />} />
            <Route path="/forgot-password" element={<ForgotPaswordEmail />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
