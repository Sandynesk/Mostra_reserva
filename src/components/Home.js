import React from 'react';
import Navbar from './Navbar.js'; // Importe o componente Navbar
import Info from './Info';
import Card from './Card.js';
import Frente from './Frente.js';
import Footer from './Footer.js';
import Fundo from './Fundo.js';
import Info2 from './Info2.js';
import Blocao from './Blocao.js';
import Info3 from './Info3.js';

function Home() {
    return (
        <div className='home' href='/'>
            <Navbar/>
            <Fundo />
            <Frente />
            <Card />
            <Info2 />
            <Info />
            <Blocao />
            <Info3 />
            <Footer/>
        </div>
    );
}

export default Home;
