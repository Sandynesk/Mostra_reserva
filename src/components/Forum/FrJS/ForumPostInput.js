import React from 'react';
import '../FrCss/ForumPostInput.css'

function ForumInput(){
    return(
        <div class="forum-input-container">
        <h1 className='forum-input-title'><b>Sobre quais direitos deseja falar hoje?</b></h1>
    <input type="text" id="forum-title" placeholder="Título" />
    <textarea id="forum-content" placeholder="Contexto"></textarea>
    <div class="tag-button-container">
        <select id="forum-tags">
            <option value="" disabled selected>Selecione as tags</option>
            <option value="consumidor">Direito do Consumidor</option>
            <option value="reclamações">Reclamações</option>
            <option value="garantias">Garantias</option>
            <option value="contratos">Contratos</option>
        </select>
        <button id="forum-post-button">Postar</button>
    </div>
</div>
    )
}

export default ForumInput;