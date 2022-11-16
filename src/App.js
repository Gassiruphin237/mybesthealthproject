import React from 'react'
import {Routes, Route} from 'react-router-dom'
import  Login  from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './component/nav/Footer'
import ForgotPaswordEmail from './pages/ForgotPaswordEmail'
import ResetPassword from './pages/ResetPassword'
import StepTwoSignUp from './pages/StepTwoSignUp';
import SignUpPage from './pages/registration/SignUpPage'
// import './App.css';


  function App() {

   
    return (
      <div>
        <Routes>
          <Route path="/login" element={<Login/> } />
          {/* <Route path="/Sign-up" element={<SignUp/> } /> */}
          <Route path="/forgot-password" element={<ForgotPaswordEmail/> } />
          <Route path="/reset-password" element={<ResetPassword/> } />
          {/* <Route path="/step-two" element={<StepTwoSignUp/> } /> */}
          <Route path="/step-tree" element={<SignUpPage/> } />
        </Routes>
        <Footer/> 
      </div>
    );
  }

export default App;
