import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './homelogin.css';
import './media.css';
import imgMulher from './Mulher.jpg';

function Infodois() {
    return (

        <>
        <div class="mulher-conteiner">
            <div>
                <h5 class="mulher-title">Comunique-se!</h5>
                <div class="card-mulher">
                    <h1 class="card-titulo-mulher">Nosso objetivo é empoderar você, fornecendo informações claras e acessíveis para que possa tomar decisões informadas e defender seus interesses.
O fórum do consuweb é um espaço vibrante e interativo onde consumidores de todos os lugares podem se reunir para compartilhar experiências e obter apoio. É um lugar onde as dúvidas são esclarecidas e as informações são compartilhadas, ajudando a criar uma comunidade de consumidores conscientes e informados.</h1>
                </div>
                <div>
                    <h5 class="mulher-title-dois">Empodere-se junto com o consuweb!</h5>
                    <p class="mulher-para">Ao se empoderar com o conhecimento e as ferramentas certas, você se torna um consumidor não apenas consciente, mas também ativo na defesa de seus direitos e na promoção de um mercado justo para todos. Junte-se ao ConsuWeb e faça parte de uma comunidade que está transformando o consumo em uma experiência segura, justa e satisfatória.</p>
                </div>
            </div>
            
        </div>

        
        <div>
                <img src={imgMulher} className="imagem-mulher" />
                
            </div>
        </>
    );
}


export default Infodois;
