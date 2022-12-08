import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import  Login  from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './component/nav/Footer'
import ForgotPaswordEmail from './pages/ForgotPaswordEmail'
import ResetPassword from './pages/ResetPassword'
import StepTwoSignUp from './pages/StepTwoSignUp';
import SignUpPage from './pages/registration/SignUpPage'
import Acceuil from './Acceuil';
import './App.css';


  function App() {

   
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Acceuil /> } />
          </Routes>
        </div> 
      </Router>
    );
  }

export default App;
