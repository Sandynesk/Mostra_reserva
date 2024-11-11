import React, { useState } from 'react';
import axios from 'axios';  // Importe o axios
import '../FrCss/ForumPostInput.css';

function ForumInput() {
    // Estados para armazenar os valores do formulário
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');

    // Função para enviar os dados para o backend
    const handlePostSubmit = async () => {
        try {
            // Envia os dados para a API do backend
            const response = await axios.post('http://localhost:5000/api/pserver/ForumPostInput', {
                titulo: titulo,
                texto: texto,
            });

            // Lógica após sucesso
            alert(response.data); // Exibe a resposta do servidor
            setTitulo(''); // Limpa o campo título
            setTexto(''); // Limpa o campo texto
        } catch (error) {
            console.error('Erro ao enviar o post:', error);
            alert('Erro ao enviar o post');
        }
    };

    return (
        <div className="forum-input-container">
            <h1 className="forum-input-title"><b>Sobre quais direitos deseja falar hoje?</b></h1>
            <input
                type="text"
                id="forum-title"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)} // Atualiza o estado do título
            />
            <textarea
                id="forum-content"
                placeholder="Contexto"
                value={texto}
                onChange={(e) => setTexto(e.target.value)} // Atualiza o estado do texto
            />
            <div className="tag-button-container">
                <button id="forum-post-button" onClick={handlePostSubmit}>Postar</button>
            </div>
        </div>
    );
}

export default ForumInput;
