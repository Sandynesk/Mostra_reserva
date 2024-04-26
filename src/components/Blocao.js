import React from 'react';
import './Css/Blocao.css'


    
function Blocao(props) {
      return (
        <div className="bl-container">
          <div className="bl-header">
            <h1>Por que eu deveria usar o consuweb?</h1>
          </div>
          <div className="bl-card-container">
            <div className="bl-card">
              <h1>Direitos Digitais</h1>
              <p>Informações sobre a proteção de dados pessoais e segurança online.

Perfeito para quem quer entender melhor como proteger sua privacidade e dados na era digital.</p>
            </div>
            <div className="bl-card">
              <h1>Iniciativas Legais</h1>
              <p>Atualizações sobre mudanças na legislação que afetam os direitos do consumidor.

Essencial para quem quer se manter informado sobre as leis e como elas impactam o dia a dia do consumidor.</p>
            </div>
            <div className="bl-card">
              <h1>Página de Destino</h1>
              <p>Ideal para quem busca informação específica sobre um direito do consumidor ou uma dúvida pontual.

É uma página focada totalmente em fornecer respostas rápidas e diretas, facilitando o entendimento.</p>
            </div>
          </div>
        </div>
      );
    }
    

export default Blocao;

