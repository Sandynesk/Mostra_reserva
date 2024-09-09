import React from "react";
import './Css/Forumcont.css';

function Forumcont(){
    return (
            
    <body>
    <div class="container">
            <h1>Fórum Simples</h1>
            <div class="message-form">
                <h2>Nova Mensagem</h2>
                <form id="messageForm">
                    <textarea id="messageContent" placeholder="Digite sua mensagem..."></textarea>
                    <button type="button" onclick="postMessage()">Enviar</button>
                </form>
            </div>
            <div id="messageBoard">
            </div>
        </div>
    </body>
    )

}

export default Forumcont;