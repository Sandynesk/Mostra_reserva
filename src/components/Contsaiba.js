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
        <h1 id='titulo-saiba'>Sobre o ConsuWeb</h1>
        <p id='sub-saiba'>O ConsuWeb é um site com intuito de instruir o consumidor sobre os seus direitos, através de uma interface limpa e de fácil acesso, evitando assim o número de casos de injustiça dentro do mercado consumidor, aonde frequentemente o comprador toma posição de leigo por não saber todos os seus direitos.Nosso objetivo é que o ConsuWeb tem como o intuito resolver é a falta de acesso à informação e a dificuldade que muitas pessoas tem de realmente saberem sobre seus direitos.Como? Através da implementação de alguns aspectos, o primeiro destes sendo a função de pesquisa do ConsuWeb, onde com palavras chaves e de forma resumida e "mastigada", poderá ser acessada toda e qualquer informação sobre leis específicas relacionadas ao consumo, tal qual alterações. A segunda ferramenta disponibilizada será o fórum, aonde usuários poderão interagir uns com os outros e ajudar-se, recebendo e compartilhando informações úteis e experiências. Em última instance, a aplicação é pensada para todos, tendo uma disponibilidade constante e uma interface intuitiva e simples de usar; além de funções pensadas para facilitar o acesso, como o sistema de "dica do dia" visível na página principal do app e FAQ sendo constantemente atualizado, além do contato com a equipe para sugestões e perguntas.</p>
        <img className='Mulher' src={imgMule} alt="Imagem Mule Bonita"></img> {/* Use o nome da variável que você importou para especificar a origem da imagem */}
      </div>

        <div className='Bloquinho-conteiner'>
            <h1 id='Titulo-bloquinho'>Espero que goste do <span className="consu">Consu</span><span className="web">Web!</span></h1>
            <p id='SubTitulo-frente-bloquinho'>O <span className="melhor">melhor</span> forum sobre os direitos do consumidor atualmente!</p>
        </div>


    </>
  );
}

export default Contsaiba;