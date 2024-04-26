
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './Css/info3.css'
import imgMulher2 from'../Fotos/Mulher2.png';

function Infotreis(){
  return(
      <div class="info3-container container-fluid my-5 px-0"> 
        <div class="p-5 text-center bg-body-custom rounded-3">
          <svg class="bi mt-4 mb-3 styled-svg" width="100" height="100"></svg>
          <img src={imgMulher2} alt="Mulher" className="img-mulher"></img> {/* Adicione essa linha */}
          <h1 class="text-saiba-direito text-body-emphasis">O público também participa!</h1>
          <div class="card-mulher2">
              <h1 class="card-titulo-mulher2">O ConsuWeb se destaca ao criar uma comunidade envolvente e participativa de consumidores. Nessa comunidade, os consumidores se tornam conscientes e informados, compartilhando experiências, buscando apoio mútuo e mantendo-se atualizados sobre as constantes mudanças na legislação que impactam diretamente seus direitos. O fórum no ConsuWeb representa um espaço vital e interativo dentro da comunidade de consumidores conscientes. A existência desse fórum não apenas fortalece a conexão entre os membros da comunidade, mas também facilita o acesso a informações valiosas e atualizadas sobre temas relevantes, como práticas comerciais, legislação, produtos e serviços. Além disso, o fórum possibilita a troca de conhecimentos e a busca por apoio em situações desafiadoras, contribuindo para uma maior conscientização e empoderamento dos consumidores no ambiente de consumo.</h1>
          </div>
        </div>
        <div className='conteiner-final'>
          <div>
            <h1 className='final'>O que está esperando ? Vem saber seus direitos com a gente.</h1>
            <button className='btn-final'>Saiba seus direitos !</button>
          </div>

        </div>
      </div>
  )
}


export default Infotreis;