import React from 'react';
import '../FrCss/PostCard.css';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa'; // Importando ícones

const PostCard = () => {
  const post = {
    title: "Quero saber os meus direitos do consumidor!",
    description: "Descubra os direitos que você possui ao comprar produtos e serviços, e como se proteger de abusos e práticas desleais.",
    imageUrl: "https://i.pinimg.com/736x/37/d3/1b/37d31b659a637e5bd24a9c5662c44a4f.jpg", // Adicionei uma imagem placeholder
    author: "Maria Oliveira",
    date: "23 de Outubro, 2024"
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
          <FaComment className="post-card-icon" /> 23
          <FaHeart className="post-card-icon" /> 12
          <FaShare className="post-card-icon" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
