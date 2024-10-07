import React from 'react';
import '../FrCss/FrSidebar.css';
import HomeIcon from '../ForumFotos/botao-de-inicio.png';
import LupaIcon from '../ForumFotos/lupa.png';
import AjudaIcon from '../ForumFotos/ajuda.png';
import ContatoIcon from '../ForumFotos/livro-de-contato.png';
import FaqIcon from '../ForumFotos/pergunta-do-cliente.png';
import GuiaIcon from '../ForumFotos/procurar.png';
import ConfigIcon from '../ForumFotos/definicoes.png';

const FrSidebar = () => {
  return (
    <div className="fr-sidebar">
      <div className="fr-sidebar-toggle">
        <div className="fr-sidebar-header">
          <h2>Bem vindo ao Consu
          <span className="highlight">Web!</span>
          </h2>
        </div>
        <div className="line"></div> {/* Linha branca */}
        <div className="fr-sidebar-nav">
    <ul>
        <li><a href="#">
            <img src={HomeIcon} alt="Home" className="home-icon" />
            Página inicial
        </a></li>
        <li><a href="#">
            <img src={LupaIcon} alt="Descubra" className="lupa-icon" />
            Descubra
        </a></li>
        <li><a href="#">
            <img src={AjudaIcon} alt="Ajuda" className="ajuda-icon" />
            Ajuda
        </a></li>
        <li><a href="#">
            <img src={ContatoIcon} alt="Contato" className="contato-icon" />
            Contato
        </a></li>
    </ul>
    
    <div className='Subtitle'>
        <h1 className="subtitle">Recursos</h1>
    </div>
    
    <ul>
    <li>
            <a href="#">
                <img src={FaqIcon} alt="FAQ" className="faq-icon" />
                FAQ
            </a>
        </li>
        <li>
            <a href="#">
                <img src={GuiaIcon} alt="Guia de uso" className="guia-icon" />
                Guia de uso
            </a>
        </li>
        <li>
            <a href="#">
                <img src={ConfigIcon} alt="Configurações" className="config-icon" />
                Configurações
            </a>
        </li>
      
    </ul>

        </div>
      </div>
    </div>
  );
}

export default FrSidebar;