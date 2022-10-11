import './App.css';
import Navbar from './components/navbar/Navbar';
// import Login from './logout/login/Login';
import SignUp from './logout/signup/SignUp'

function App() {
  return (
    // <LoginEmail/>
    <div className='App'>
       <Navbar/>
      {/* <Login/>  */}
      <SignUp/>
    </div>
    
  )
}

export default App;
