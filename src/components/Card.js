import './homelogin.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import bannerImage from './bannerplaceholder.png'; // Importe a imagem

function Card(){
    return(
    <div class="card text-bg-dark">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Escrever coisas interessante aqui.</p>
        </div>
    )
}

export default Card;
