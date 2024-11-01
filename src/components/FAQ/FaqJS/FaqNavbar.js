// Navbar.js
import React from 'react';
import '../FaqCss/FaqNavbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import imgLogo from '../FaqFotos/Fonte3.png'
import pfpPlaceholder from '../FaqFotos/User.png'

function FaqNavbar() {
  return (
    
    <nav className='navFaq'>
      <div className='Faq-conteiner'>
          <img src={imgLogo} alt='Logo ConsuWeb' id='logoNav'></img>
        <div className='titulo-containerr'>
          <p id='titulo'>Consu<span className="highlight">Web</span></p>
          </div>
        <div className='pesquisa-containerr'>
          <img src='' id='lupa'></img>
          <input type='text' id="pesquisa" name="pesquisa" placeholder='O que buscas?'></input>
          
        </div>
        <div>
        <ul className="custom-navbar-nav mb-2 mb-lg-0">
          <li className="custom-nav-item">
              <a className="custom-nav-link active" aria-current="page" href="/">Tela Inicial</a>
          </li>
          <li className="custom-nav-item">
              <a className="custom-nav-link" href="saiba">Saiba Mais</a>
          </li>
          <li className="custom-nav-item">
              <a className="custom-nav-link" href="forum">Fórum</a>
          </li>
          <li className="custom-nav-item">
              <a className="custom-nav-link" href="faq">FAQ</a>
          </li>
      </ul>

      
        </div>

        
      </div>
    </nav>

  );
}



export default FaqNavbar;