import './Css/Card.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap


function InnerCard() {
    return (
        <div className="chat-container">
            <div className="message user-message">
                <p className="message-text"><strong>Usuário: </strong> Oi, como posso te ajudar hoje?</p>
            </div>
            <div className="message consuweb-message">
                <p className="message-text"><strong>ConsuWeb:</strong> Olá! Estou aqui para responder suas dúvidas sobre direitos do consumidor.</p>
            </div>
            <div className="message user-message">
                <p className="message-text"><strong>Usuário: </strong> Eu gostaria de saber mais sobre essa tal de Curiosidade do dia</p>
            </div>
            <div className="message consuweb-message">
                <p className="message-text"><strong>ConsuWeb:</strong> Você sabia que, no Brasil, o Código de Defesa do Consumidor garante o direito de arrependimento? Isso significa que, após realizar uma compra pela internet ou por telefone, o consumidor tem até <strong>7 dias corridos</strong> para se arrepender da compra e desistir do negócio, sem precisar dar qualquer justificativa.</p>
            </div>
        </div>
    );
}


function Card(){
    return(
        <div className="card text-bg-dark">
            <h5 className="card-title">Já sabe quais serviços o ConsuWeb oferece ?</h5>
            <p className="card-text">Aqui no ConsuWeb, valorizamos o seu direito de estar bem informado. Por isso, criamos a função "Curiosidade do Dia", onde compartilhamos fatos interessantes e importantes sobre os direitos do consumidor. Todos os dias, destacamos uma nova informação que pode ajudá-lo a entender melhor os produtos e serviços que você utiliza.</p>
            <InnerCard />
        </div>
    )
}

export default Card;
