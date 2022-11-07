import React from 'react'
import {Routes, Route} from 'react-router-dom'
import  Login  from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './component/nav/Footer'
import ForgotPaswordEmail from './pages/ForgotPaswordEmail'
import axios from 'axios'
// import './App.css';


  function App() {

    axios.get('http://172.17.4.23:8000/api/users')
    .then(function(res) {
      console.log(res);
    })
    .catch(function(error) {
      console.log(error);
    })

    return (
      <div>
        <Routes>
          <Route path="/login" element={<Login/> } />
          <Route path="/Sign-up" element={<SignUp/> } />
          <Route path="/forgot-password" element={<ForgotPaswordEmail/> } />
        </Routes>
        <Footer/> 
      </div>
    );
  }

export default App;
