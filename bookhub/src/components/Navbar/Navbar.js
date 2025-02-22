import React from 'react';
import Logo from '../../assets/images/logo.png';

import './Navbar.css';

function Navbar(){
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={Logo} alt='Logo' className='logo'/>
            </div>

            <div className="navbar-search">
                <input type="text" placeholder="Pesquisar..." />
            </div>

            {/*<div className="navbar-icon">
                <img src={Perfil} alt="Ícone de Perfil" />
            </div>*/}

            <ul className='navbar-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Livros</a></li>
                <li><a href="/products">Literatura Brasileira</a></li>
                <li><a href="/contact">Sobre Nós</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
