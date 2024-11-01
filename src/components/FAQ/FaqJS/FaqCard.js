import '../../Css/Card.css'
import React from 'react';
import ImgDuvida from '../FaqFotos/Duvida.png'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap




function Card(){
    return(
        <div className="card text-bg-dark">
            <h5 className="card-title">Algumas dúvidas frequentes do ConsuWeb</h5>
            <p className="card-text">Nesta página de dúvidas frequentes, nosso objetivo é garantir que você, consumidor, tenha acesso a informações claras e úteis sobre seus direitos e os serviços que oferecemos. Entendemos que a navegação em temas relacionados ao consumo pode ser complexa, por isso, reunimos as perguntas mais comuns e suas respectivas respostas.</p>
            <img src={ImgDuvida} className='card-duvida'></img>
        </div>
    )
}

export default Card;
