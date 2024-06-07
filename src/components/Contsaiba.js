import React from 'react';
import './Css/Contsaiba.css'; 
import imgMule from '../Fotos/MuleBonita.jpg'


function Contsaiba() {
  return (
    <>
      <div className="Saiba-conteiner">
        <div className="bloco-roxo">
          <h1 id='Titulo-frente'>Como funciona o <span className="consu">Consu</span><span className="web">Web?</span></h1>
          <p id='SubTitulo-frente'>O <span className="melhor">melhor</span> forum sobre os direitos do consumidor atualmente!</p>
        </div>
      </div>

      <div className='Saiba-conteiner-info'>
        <h1 id='titulo-saiba'>Lorem ipsum</h1>
        <p id='sub-saiba'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        <img className='Mulher' src={imgMule} alt="Imagem Mule Bonita"></img> {/* Use o nome da variável que você importou para especificar a origem da imagem */}
      </div>

        <div className='Bloquinho-conteiner'>
            <h1 id='Titulo-bloquinho'>abubu abububublé <span className="consu">Consu</span><span className="web">Web?</span></h1>
            <p id='SubTitulo-frente-bloquinho'>O <span className="melhor">gugu dada</span> forum sobre os direitos do consumidor atualmente!</p>
        </div>


    </>
  );
}

export default Contsaiba;
