import React from 'react';
import vidNuvem from '../Fotos/Nuvem.mp4'; // Certifique-se de que o caminho do vídeo está correto
import './Css/Frente.css'


function Frente() {
  return (
    <div>
      <div className="slogan-container">
        <div>
          <h1 id="slogan-title">Conheça seus direitos, exija transparência! Informação completa, consumidor seguro.</h1>
          <p id="slogan-subtitle">Empodere-se com conhecimento e entre no nosso forum já!</p>
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
