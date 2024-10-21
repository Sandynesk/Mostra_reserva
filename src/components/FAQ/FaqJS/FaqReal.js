import React from "react";
import '../FaqCss/FaqCont.css';

function FaqReal(){
    return (
        
        <body>
        <div class="container">
        <h1>FAQ - Perguntas Frequentes</h1>
        <div class="faq-item">
            <h2 class="question">O que é a sua empresa?</h2>
            <p class="answer">Nossa empresa oferece soluções inovadoras para o mercado, focando na qualidade e no atendimento ao cliente.</p>
        </div>
        <div class="faq-item">
            <h2 class="question">Como posso entrar em contato?</h2>
            <p class="answer">Você pode nos contatar pelo e-mail: contato@empresa.com ou pelo telefone: (11) 1234-5678.</p>
        </div>
        <div class="faq-item">
            <h2 class="question">Quais são os horários de atendimento?</h2>
            <p class="answer">Estamos disponíveis de segunda a sexta, das 9h às 18h.</p>
        </div>
        <div class="faq-item">
            <h2 class="question">Onde posso encontrar mais informações?</h2>
            <p class="answer">Mais informações estão disponíveis em nosso site, na seção de serviços.</p>
        </div>
        </div>
        </body>

    )
}

export default FaqReal;