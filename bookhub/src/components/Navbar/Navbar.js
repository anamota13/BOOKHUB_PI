import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Perfil from '../../assets/images/perfil.png';
import Carrinho from '../../assets/images/carrinho.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LiteraturaBrasileira from '../LiteraturaBrasileira/LiteraturaBrasileira';
import Sobre from '../Sobre/Sobre.js';


function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">

            <div className="navbar-content">  {/* Nova div que envolve tudo menos a faixa */}
                <div className="navbar-logo">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="navbar-search">
                    <input type="text" placeholder="Pesquisar..." />
                </div>

                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Livros</a></li>
                    <Link to="/literatura-brasileira">Literatura Brasileira</Link>
                    <Link to="/sobre">Sobre Nós</Link>
                </ul>

                <div className="navbar-icon" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                    <img src={Perfil} alt="Ícone de Perfil" />
                </div>

                <div className="carrinho-icon">
                    <img src={Carrinho} alt="Ícone de Carrinho de Compras" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
