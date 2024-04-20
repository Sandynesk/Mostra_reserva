import React from 'react';
import Interesselegal from './Interesselegal.png'; // Renomeie a variável de importação
import './homelogin.css'; // Importe o arquivo CSS para estilizar o componente

function Interesse() {
    return (
        <div className="Curioso">
            <img src={Interesselegal} alt='banner'></img> {/* Use o novo nome da variável de importação */}
            <h1 className="curiosidade">ABUBUBUBLÉ</h1>
        </div>
    );
}

export default Interesse;
