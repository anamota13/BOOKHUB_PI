import React from 'react';
import Logo from '../../assets/images/logo.png';
import InstagramIcon from '../../assets/images/instagram.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo e Redes Sociais */}
                <div className="footer-logo">
                    <img src={Logo} alt="BookHub Logo" />
                    <div className="footer-social">
                        <p>Acompanhe-nos:</p>
                        <div className="social-icon">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramIcon} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                    <p className="footer-copyright">© 2025 BookHub. Todos os direitos reservados.</p>
                </div>
                
                {/* Links Rápidos */}
                <div className="footer-links">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/livros">Livros</a></li>
                        <li><a href="/literatura-brasileira">Literatura Brasileira</a></li>
                        <li><a href="/sobre-nos">Sobre Nós</a></li>
                    </ul>
                </div>
                
                {/* Contato e Endereço */}
                <div className="footer-contact">
                    <h4>Endereço</h4>
                    <p>R. Ítalo Greco, 4560 - Vila Imperador, Franca - SP, 14405-191</p>
                    <h4>Contato</h4>
                    <p>📞 +55 16 99237-1637</p>
                    <p>📧 bookhub.suporte@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
