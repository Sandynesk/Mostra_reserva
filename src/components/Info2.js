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
                <h5>Comunique-se</h5>

            </div>


        </div>
        
        <div>
                <img src={imgMulher} className="imagem-mulher" />

            </div>
        </>
    );
}


export default Infodois;
