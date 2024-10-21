import React from 'react';
import './Css/Perfil.css';
import Foto from '../Fotos/Pretty.png';
import Navbar from './Navbar';
import Footer from './Footer';


const Perfil = () => {
    const usuario = {
      nome: 'Georgia Gabriella',
      email: 'Usuarione@exemplo.com',
      foto: ''
    };

    const handleEditClick = () => {
      alert('Botão clicado!');
    };
    return (
      <div>
      <Navbar/>
      <div className="perfil-container">
        <div className="perfil-header">
          <img src={Foto} alt="Foto de Perfil" className="perfil-foto" />
          <h1>{usuario.nome}</h1>
          <p>{usuario.email}</p>
          <button onClick={handleEditClick} className="perfil-edit-button">Editar Perfil</button>
        </div>
        <div className="perfil-body">
          <h2>Sobre</h2>
          <p>Data de Nascimento: 15/09/1992 </p>
          <p>Estado Civil: Casada</p>
          <p>Dia da matricula: 16/10/2024</p>
          <p>Status: Online</p>
        </div>
        <div className="Post-Button">
        <button onClick={handleEditClick} className="Post-Button_main">Fazer Post</button>
        </div>
        <Footer/>
      </div>
      </div>
    );
  };

export default Perfil;