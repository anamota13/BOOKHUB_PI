import React from 'react';
import Logo from '../../assets/images/logo.png';
import Perfil from '../../assets/images/perfil.png';
import Carrinho from '../../assets/images/carrinho.png';
import './Navbar.css';

function Navbar(){
    return (
        <nav className='navbar'>

            <div className='faixa'></div>

            <div className='navbar-logo'>
                <img src={Logo} alt='Logo' className='logo'/>
            </div>

            <div className="navbar-search">
                <input type="text" placeholder="Pesquisar..." />
            </div>

            <ul className='navbar-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Livros</a></li>
                <li><a href="/products">Literatura Brasileira</a></li>
                <li><a href="/contact">Sobre Nós</a></li>
            </ul>

            <div className="navbar-icon">
                <img src={Perfil} alt="Ícone de Perfil" />
            </div>

            <div className='carrinho-icon'>
                <img src={Carrinho} alt='Ícone de Carrinho de Compras'></img>
            </div>
        </nav>
    );
}

export default Navbar;
