import React from 'react';
import imgFundo from '../Fotos/Fundo.png'; // Renomeie a variável de importação


function Fundo() {
    return (
        <div className="fundo">
            <img src={imgFundo}></img> {/* Use o novo nome da variável de importação */}
            
        </div>
    );
}

export default Fundo;
