// src/components/Home.js

import React from 'react';
import Navbar from './Navbar';
import Fundo from './Fundo';
import Frente from './Frente';
import Card from './Card';
import Info2 from './Info2';
import Info from './Info';
import Blocao from './Blocao';
import Info3 from './Info3';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Navbar /> {/* Renderize o componente Navbar */}
      <Fundo />
      <Frente />
      <Card />
      <Info2 />
      <Info />
      <Blocao />
      <Info3 />
      <Footer /> {/* Renderize o componente Footer */}
    </div>
  );
}

export default Home;
