import React from 'react'
import Navbar from '../component/nav/Navbar'
import '../styles/home.css'

const Home = () => {
    return (
        <div className='body'>
            {/*Nav Bar*/ }
            <nav className="navbar navbar-bg shadow fixed-top py-3 navbar-expand-lg ">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="Avatar "  className=" logo rounded-pill"/>My<span>Best</span>Health
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        Menu<span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="btn nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="btn nav-link" to="/Login">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Register' className="btn nav-link" >Sign Up</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            {/*Banner Image*/ }
            <div>
                <div className="banner vh-100 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1 className="display-4 mt-4">My <span>Best</span> Health</h1>
                                <p className='intro mb-5 mt-2'><i>
                                MyBestHealth est une plateforme de suivi des malades chroniques et de la femme enceinte.
                                Il permettra d’accompagner chaque patient dans son suivi pour un meilleur rendu sur sa santé.
                                Contrairement à des applications de téléconsultations médicales, nous suivons des patients
                                ayant un diagnostic et suivi déjà au moins par un personnel de santé et nous assurons la
                                continuité des soins après un consultation médicale ou un séjour hospitalier.
                                </i></p>
                                <Link to='/Login' className="btn signIn btn-outline-light px-5" >Sign In</Link>
                                <Link to='/Register' className="btn signUp btn-outline-info px-5 mx-3 w-bold">Sign Up</Link>
                                <Link to='/Profil' className="btn signUp btn-outline-info px-5 mx-3 w-bold">Profil</Link>

                            </div>
                        </div>
                        
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Home;
