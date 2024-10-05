// src/components/Home.js
import React from 'react';
import FrNavbar from './FrJS/FrNavbar';
import Footer from '../Footer';
import FrSidebar from './FrJS/FrSidebar';


function ForumHome() {
    return (
      <div className="forum-container">
        
        <FrNavbar /> {/* Renderize o componente Navbar */}
        <FrSidebar /> {/* Renderize o componente*/}
        <Footer /> {/* Renderize o componente Footer */}
      </div>
    );
  }
  
export default ForumHome;