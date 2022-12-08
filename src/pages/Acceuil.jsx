import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo.svg';

const Acceuil = () => {
    return (
        <div className='body'>
            {/*Nav Bar*/ }
            <nav class="navbar navbar-bg shadow fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container py-0">
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="Avatar "  className=" logo rounded-pill"/>My<span>Best</span>Health
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link to="" className="btn nav-link active" aria-current="page" >Home</Link>
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
            <div className="banner vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 py-5">
                            <h1 className="display-4 mt-4 pt-5">My <span>Best</span> Health</h1>
                            <p className='intro mb-5 mt-2'><i>
                            MyBestHealth est une plateforme de suivi des malades chroniques et de la femme enceinte.
                            Il permettra d’accompagner chaque patient dans son suivi pour un meilleur rendu sur sa santé.
                            Contrairement à des applications de téléconsultations médicales, nous suivons des patients
                            ayant un diagnostic et suivi déjà au moins par un personnel de santé et nous assurons la
                            continuité des soins après un consultation médicale ou un séjour hospitalier.
                            </i></p>
                            <Link to='/Login' className="btn signIn btn-outline-light px-5" >Sign In</Link>
                            <Link to='/Register' className="btn signUp btn-outline-info px-5 mx-3 w-bold">Sign Up</Link>
                          
                        </div>
                    </div>
                    
                </div>
            </div> 
        </div>
    );
}

export default Acceuil;
