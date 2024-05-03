// Navbar.js
import React from 'react';
import './Css/Navbar.css'; // Importe o arquivo de estilos CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import imgLogo from '../Fotos/Logo.png'


function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container-fluid">
        <img src={imgLogo} className="Logo" alt="Logo" /> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Tela incial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Saiba mais!</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Serviços</a>
            </li>
          </ul>
          <a className="btn btn-custom" href="#" role="button" style={{ fontWeight: 'bold' }}>Saiba seus direitos!</a>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;
