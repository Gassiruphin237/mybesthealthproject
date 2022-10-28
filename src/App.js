import React from "react"
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './logout/login/Login';
import {Routes, Route} from 'react-router-dom'
import SignUp from './logout/signup/SignUp'
import LoginPhone from './logout/login/loginPhone/LoginPhone';
import LoginEmail from './logout/login/loginEmail/LoginEmail'
// import { MyBestHealthAPI } from "./axios.config";
import axios from "axios";

/*fetch('http://172.17.4.31:8000/api/users').then((response) => {
  response = response.json()
  response.then((result) => {
    console.log(result);
  })
})*/

function App() {

  

  axios.get('http://172.17.4.105:8000/api/users')
    .then(function (response) {
      // handle succes
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then( function () {
      //always execute
    })

  // const [users, setUsers] = React.useState([])


  // React.useEffect(()=>{
  //   getUsers()
  // }, [])

  // const getUsers = async () => {
  //   const response = await MyBestHealthAPI.get('/users/1', {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   setUsers(response.data)
  //   console.log(response.data)
  // }

  return (

    <div className='App'>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/> } />
        <Route path="/LoginPhone" element={<LoginPhone/> } />
        <Route path="/LoginEmail" element={<LoginEmail/> } />
        <Route path="/SignUp" element={<SignUp/> } />
      </Routes>

    </div>
    
  )
}

export default App;
