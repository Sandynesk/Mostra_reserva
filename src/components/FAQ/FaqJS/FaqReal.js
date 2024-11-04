import React, { useState } from "react";
import '../FaqCss/FaqCont.css';

function FaqReal() {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleAnswer = (index) => {
        if (activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter(i => i !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    return (
        <>
      
        <div className="container-faq">
            <h1>Perguntas Frequentes</h1>
            <div className="Subtitile-faq">
                <h1 id="Title-faq">Bem-vindo à Seção de Perguntas Frequentes</h1>
                <p id="Sub-title-faq">Este espaço foi criado para ajudá-lo a entender melhor nossos serviços e os direitos do consumidor. Explore as perguntas abaixo e encontre as respostas que você precisa!</p>
            </div>

            {[
                {
                    question: "O que é a sua empresa?",
                    answer: "Nossa empresa é dedicada a oferecer soluções inovadoras que atendem às necessidades do mercado contemporâneo. Desde a nossa fundação, temos buscado não apenas fornecer produtos de alta qualidade, mas também serviços que agreguem valor aos nossos clientes. Nossa equipe é composta por especialistas apaixonados que estão sempre em busca de melhorias e inovações, garantindo que possamos acompanhar as tendências do setor e superar as expectativas dos nossos clientes."
                },
                {
                    question: "Como posso entrar em contato?",
                    answer: "Para entrar em contato conosco, você pode utilizar o e-mail contato@empresa.com. Nossa equipe de atendimento ao cliente está disponível para responder às suas dúvidas e fornecer as informações necessárias. Além disso, você pode nos contatar pelo telefone (11) 1234-5678 durante nosso horário de atendimento, que é de segunda a sexta-feira, das 9h às 18h. Também oferecemos um formulário de contato em nosso site, onde você pode deixar sua mensagem, e nos comprometemos a responder o mais rápido possível."
                },
                {
                    question: "Quais são os horários de atendimento?",
                    answer: "Nossos horários de atendimento são de segunda a sexta-feira, das 9h às 18h. Durante esse período, nossa equipe está sempre à disposição para ajudar com quaisquer questões que você possa ter. Se você nos contatar fora desse horário, garantimos que faremos o possível para responder assim que possível no próximo dia útil. Também estamos disponíveis em algumas datas especiais, então fique atento às nossas redes sociais e site para atualizações sobre horários de funcionamento durante feriados."
                },
                {
                    question: "Onde posso encontrar mais informações?",
                    answer: "Para obter mais informações sobre nossos produtos e serviços, você pode visitar nossa seção de serviços em nosso site oficial. Lá, você encontrará detalhes abrangentes sobre o que oferecemos, incluindo especificações de produtos, guias de uso e perguntas frequentes. Além disso, temos um blog onde publicamos artigos úteis e atualizações do setor. Se você precisar de informações adicionais, não hesite em entrar em contato conosco diretamente pelo e-mail ou telefone, e nossa equipe ficará feliz em ajudar."
                },
            ].map((item, index) => (
                <div 
                    className={`faq-item ${activeIndexes.includes(index) ? 'active' : ''}`} 
                    key={index} 
                    onClick={() => toggleAnswer(index)}
                >
                    <h2 className="question">{item.question}</h2>
                    <p className={`answer ${activeIndexes.includes(index) ? 'show' : ''}`}>{item.answer}</p>

                </div>
                

            ))}
        </div>

        <div className="Saiba-conteiner">
        <div className="bloco-roxo">
          <h1 id='Titulo-frente'>Espero que não<span className="consu"> reste</span><span className="web"> dúvidas</span></h1>
          <p id='SubTitulo-frente'>O <span className="melhor">melhor</span> forum sobre os direitos do consumidor atualmente!</p>
        </div>
      </div>
        </>
    );
}

export default FaqReal;
