import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './logout/login/Login';
import {Routes, Route} from 'react-router-dom'
import SignUp from './logout/signup/SignUp'
import LoginPhone from './logout/login/loginPhone/LoginPhone';
import LoginEmail from './logout/login/loginEmail/LoginEmail'

function App() {
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
