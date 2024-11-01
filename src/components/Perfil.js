import React from 'react';
import './Css/Perfil.css';
import './Css/PerfilPost.css';
import Foto from '../Fotos/Pretty.png';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa'; // Importando ícones

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
    <Navbar />
    <div className="perfil-container">
        <div className="perfil-header">
            <img src={Foto} alt="Foto de Perfil" className="perfil-foto" />
            <h1>{usuario.nome}</h1>
            <p>{usuario.email}</p>
            <button onClick={handleEditClick} className="perfil-edit-button">Editar Perfil</button>
        </div>
        <div class="card-client">
    <p class="name-client"> Sobre
        <span>Data de Nascimento: 20/08/1989
        </span>
        <span>Data de registro: 11/08/2024
        </span>
        <span>Estado Civíl: Noiva
        </span>
        <span>Status: Online
        </span>
    </p>
</div>
        <div className="Post-Button">
            <button onClick={handleEditClick} className="Post-Button_main">Fazer Post</button>
        </div>
        <PostCard />
    </div>
    <div ClassName="Footer-Perfil">
    <Footer />
    </div>
</div>
  );
};

const PostCard = () => {
    const post = {
        title: "Preciso de ajuda!",
        description: "Um homem me vendeu um notebook falsificado e não quer devolver meu dinheiro, por conta de eu já ter usado o produto, ele me deu garantia de apenas 2 dias e o produto demorou uma semana para chegar, o que eu faço?",
        imageUrl: "https://cdn.wallpapersafari.com/41/66/dLD9Yk.jpg", // Adicionei uma imagem placeholder
        author: "Georgia Gabriella",
        date: "1 de Novembro, 2024"
    };

    return (
      <div className="post-card">
          <div className="post-card-content">
              <div className="post-card-header">
                  <img src={post.imageUrl} alt={post.title} className="post-card-profile-image" />
                  <div>
                      <span className="post-card-author">{post.author}</span>
                      <span className="post-card-date">{post.date}</span>
                  </div>
              </div>
              <h2 className="post-card-title">{post.title}</h2>
              <p className="post-card-description">{post.description}</p>
              <div className="post-card-actions">
                  <FaComment className="post-card-icon" /> 78
                  <FaHeart className="post-card-icon" /> 63
                  <FaShare className="post-card-icon" /> 2
              </div>
          </div>
      </div>
  );
};


export default Perfil;
