import React from 'react';
import '../FrCss/ForumPostInput.css'

function ForumInput() {
    return (
        <div class="forum-input-container">
            <input type="text" id="forum-title" placeholder="Título" />
            <textarea id="forum-content" placeholder="Contexto"></textarea>
            <div class="tag-button-container">
                <select id="forum-tags">
                    <option value="" disabled selected>Selecione as tags</option>
                    <option value="Direito do Consumidor">Direito do Consumidor</option>
                    <option value="Reclamações">Reclamações</option>
                    <option value="Garantias">Garantias</option>
                    <option value="Contratos">Contratos</option>
                </select>
                <button type='submit' id="forum-post-button">Postar</button>
            </div>
        </div>
    )
}

export default ForumInput;