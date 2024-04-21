import React from 'react';
import vidNuvem from './Nuvem.mp4'; // Certifique-se de que o caminho do vídeo está correto
import imgFundo from './Fundo.png'
import './homelogin.css';
import './media.css'

function Frente() {
  return (
    <div>
      <div className="slogan-container">
        <div>
          <h1 id="slogan-title">Conheça seus direitos, exija transparência! Informação completa, consumidor seguro</h1>
          <p id="slogan-subtitle">Empodere-se com conhecimento e faça escolhas conscientes.</p>
          <button id="btnQueroDireitos">Quero meus direitos!</button>

        </div>
      </div>

      <div className="video-container">
        <video autoPlay loop muted playsInline preload="auto" className="video" controlsList="nodownload">
          <source src={vidNuvem} type="video/mp4" />
        </video>
      </div>

    </div>
  );
}

export default Frente;
