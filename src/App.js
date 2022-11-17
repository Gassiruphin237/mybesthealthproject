import React from 'react'
import {Routes, Route} from 'react-router-dom'
import  Login  from './pages/Login';
import Footer from './component/nav/Footer'
import ForgotPaswordEmail from './pages/ForgotPaswordEmail'
import ResetPassword from './pages/ResetPassword'
import SignUpPage from './pages/registration/SignUpPage'
import Home from './pages/Home';


  function App() {

   
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/forgot-password" element={<ForgotPaswordEmail/> } />
          <Route path="/reset-password" element={<ResetPassword/> } />
          <Route path="/step-tree" element={<SignUpPage/> } />
        </Routes>
        <Footer/> 
      </div>
    );
  }

export default App;
