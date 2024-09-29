// src/components/Home.js
import React from 'react';
import FrNavbar from './FrJS/FrNavbar';
import Footer from '../Footer';

function ForumHome() {
    return (
      <div className="forum-container">
        <FrNavbar /> {/* Renderize o componente Navbar */}
        <Footer /> {/* Renderize o componente Footer */}
      </div>
    );
  }
  
export default ForumHome;
