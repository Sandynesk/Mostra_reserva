import React from 'react';
import FaqNavbar from './FaqJS/FaqNavbar.js';
import FaqReal from './FaqJS/FaqReal.js'
import Footer from '../Footer';
import FaqCard from './FaqJS/FaqCard.js';

function FaqHome() {
    return (
      <div className="faq-container">
        
        <FaqNavbar /> {/* Renderize o componente Navbar */}
        <FaqCard />
        <FaqReal />
        <Footer /> {/* Renderize o componente Footer */}

      </div>
    );
  }
  
export default FaqHome;