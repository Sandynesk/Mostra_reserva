import React from "react";
import './Css/Forumcont.css';

function Forumcont(){
    return (
            
        <body>
        <header>
            <h1>Fórum ConsuWeb</h1>
        </header>
        <main>
            <section class="new-post">
                <h2>Crie um novo post</h2>
                <textarea placeholder="Escreva seu post aqui..."></textarea>
                <button>Postar</button>
            </section>
            <section class="posts">
                <article>
                    <h2><a href="post">Título do Post 1</a></h2>
                    <p>Conteúdo do post 1... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim nisl.</p>
                    <p><a href="post">Leia mais</a></p>
                </article>
                <article>
                    <h2><a href="post">Título do Post 2</a></h2>
                    <p>Conteúdo do post 2... Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><a href="post">Leia mais</a></p>
                </article>
            </section>
        </main>
    </body>
    
    )

}

export default Forumcont;