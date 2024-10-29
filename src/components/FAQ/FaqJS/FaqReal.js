import React, { useState } from "react";
import '../FaqCss/FaqCont.css';

function FaqReal() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container-faq">
            <h1>Perguntas Frequentes</h1>
            {[
                {
                    question: "O que é a sua empresa?",
                    answer: "Nossa empresa é dedicada a oferecer soluções inovadoras que atendem às necessidades do mercado contemporâneo. Temos um compromisso firme com a qualidade em todos os nossos produtos e serviços, sempre priorizando o atendimento excepcional ao cliente. Acreditamos que a inovação é a chave para o sucesso, e trabalhamos constantemente para trazer novidades e melhorias que possam agregar valor à sua experiência."
                },
                {
                    question: "Como posso entrar em contato?",
                    answer: "Para entrar em contato conosco, você pode utilizar o e-mail contato@empresa.com, onde nossa equipe estará pronta para responder às suas dúvidas e fornecer as informações necessárias. Além disso, estamos disponíveis pelo telefone (11) 1234-5678 durante nosso horário de atendimento. Fique à vontade para nos contatar a qualquer momento!"
                },
                {
                    question: "Quais são os horários de atendimento?",
                    answer: "Nossos horários de atendimento são de segunda a sexta-feira, das 9h às 18h. Durante esse período, nossa equipe está à disposição para ajudar com quaisquer questões que você possa ter. Se você nos contatar fora desse horário, faremos o possível para responder assim que possível no próximo dia útil."
                },
                {
                    question: "Onde posso encontrar mais informações?",
                    answer: "Para obter mais informações sobre nossos produtos e serviços, você pode visitar nossa seção de serviços em nosso site oficial. Lá, você encontrará detalhes abrangentes sobre o que oferecemos, incluindo especificações de produtos, guias de uso e perguntas frequentes. Se você precisar de informações adicionais, não hesite em entrar em contato conosco diretamente."
                },
            ].map((item, index) => (
                <div 
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                    key={index} 
                    onClick={() => toggleAnswer(index)}
                >
                    <h2 className="question">{item.question}</h2>
                    <p className="answer">{item.answer}</p>
                </div>
            ))}
        </div>
    );
}

export default FaqReal;
