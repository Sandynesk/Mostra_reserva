import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Css/footer.css'
import React from 'react';
import imgLogo from '../Fotos/Logo2.png';

function Footer() {
  return (
    <footer className="footer-basic">
      <div className="social">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" data-testid="facebook-link">
  <FontAwesomeIcon icon={faFacebookF} />
</a>
<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" data-testid="twitter-link">
  <FontAwesomeIcon icon={faTwitter} />
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" data-testid="instagram-link">
  <FontAwesomeIcon icon={faInstagram} />
</a>
<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="linkedin-link">
  <FontAwesomeIcon icon={faLinkedinIn} />
</a>

      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Política de Privacidade</a></li>
      </ul>
      <p>© 2024 Sua Empresa. Todos os direitos reservados.</p>
      <img src={imgLogo} className="imagem-mulher" />
    </footer>
  );
}

export default Footer;
