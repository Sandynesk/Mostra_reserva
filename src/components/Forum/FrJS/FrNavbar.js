// Navbar.js
import React from 'react';
import '../FrCss/FrNavbar.css'; // Importe o arquivo de estilos CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import imgLogo from '../ForumFotos/Fonte3.png'
import pfpPlaceholder from '../ForumFotos/User.png'

function FrNavbar() {
  return (
    
    <nav className='navFr'>
      <img src={imgLogo} alt='Logo ConsuWeb' id='logoNav'></img>
      <div className='titulo-container'>
        <p id='titulo'>Consu<span className="highlight">Web</span></p>
        </div>
      <div className='pesquisa-container'>
        <img src='' id='lupa'></img>
        <input type='text' id="pesquisa" name="pesquisa" placeholder='O que buscas?'></input>
      </div>
      <button type="button" id="botãoNav">
        <img src={pfpPlaceholder} id="placeholderUser"></img>
        <span className='UserText'>Olá, <b>usuário</b>! </span>
      </button>
    </nav>

  );
}



export default FrNavbar;