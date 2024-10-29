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

        
      </div>
    </nav>

  );
}



export default FaqNavbar;