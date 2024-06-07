// src/components/Home.js
import Navbar from './Navbar';
import Footer from './Footer';
import Contsaiba from './Contsaiba';

function Saiba() {
  return (
    <div>
      <Navbar /> {/* Renderize o componente Navbar */}
      <Contsaiba />

      <Footer /> {/* Renderize o componente Footer */}
    </div>
  );
}

export default Saiba;
