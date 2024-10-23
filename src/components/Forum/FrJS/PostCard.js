import React from 'react';
import '../FrCss/PostCard.css';

const PostCard = () => {
  // Definindo o objeto post dentro do componente
  const post = {
    title: "Quero saber os meus direitos do consumidor!",
    description: "Descubra os direitos que você possui ao comprar produtos e serviços, e como se proteger de abusos e práticas desleais.",
    imageUrl: " ",
    author: "Maria Oliveira",
    date: "23 de Outubro, 2024"
  };

  return (
    <div className="post-card">
      <img src={post.imageUrl} alt={post.title} className="post-card-image" />
      <div className="post-card-content">
        <h2 className="post-card-title">{post.title}</h2>
        <p className="post-card-description">{post.description}</p>
        <div className="post-card-meta">
          <span className="post-card-author">{post.author}</span>
          <span className="post-card-date">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
