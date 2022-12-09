import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './component/login/loginContainer/Login'
import Footer from './component/footer/Footer'
import ForgotPaswordEmail from './component/forgotPassword/ForgotPaswordEmail'
import ResetPassword from './component/forgotPassword/ResetPassword'
import Account from './pages/Account';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './App.css'
import Succes from './component/register/registerStep/Succes';
import StepContext from './StepContext';
import AuthApi from './component/services/AuthApi';



function App() {

  return (
      <div className='appStyle'>
        <div className='routeStyle'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<StepContext />} />
            <Route path="/succes" element={<Succes />} />
            <Route path="/account" element={<AuthApi view={Account} />} />
            <Route path="/profile" element={<AuthApi view={Profile} />} />
            <Route path="/forgot-password" element={<ForgotPaswordEmail />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
  );
}

export default App;
