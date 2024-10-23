// src/components/Home.js
import React from 'react';
import FrNavbar from './FrJS/FrNavbar';
import Footer from '../Footer';
import FrSidebar from './FrJS/FrSidebar';
import PostCard from './FrJS/PostCard';
import ForumInput from './FrJS/ForumPostInput'
import FrPontos from './FrJS/FrPontos';

function ForumHome() {
    return (
      <div className="forum-container">
        
        <FrNavbar /> {/* Renderize o componente Navbar */}
        <PostCard />
        <FrPontos />
        <ForumInput/> 
        <FrSidebar /> {/* Renderize o componente*/}
     
      </div>
    );
  }
  
export default ForumHome;