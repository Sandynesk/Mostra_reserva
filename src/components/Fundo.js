import React from 'react';
import imgFundo from './Fundo.png'; // Renomeie a variável de importação
import './homelogin.css'; // Importe o arquivo CSS para estilizar o componente
import './media.css'

function Fundo() {
    return (
        <div className="fundo">
            <img src={imgFundo}></img> {/* Use o novo nome da variável de importação */}
            
        </div>
    );
}

export default Fundo;
