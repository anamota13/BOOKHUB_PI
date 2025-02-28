import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
        <header className="navbar"></header>

        <div className="form-container">
            <div className="form-card">
                <img src={Logo} alt="Logo" className="logo" />
                <h2 className="titulo-bemvindo">Bem-vindo de volta!</h2>

                <form>
                    <div className="input-group">
                        <label className="input-label">E-mail</label>
                        <input type="email" className="input-field" placeholder="E-mail" />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Senha</label>
                        <input type="password" className="input-field" placeholder="Senha" />
                    </div>

                    <div className='esqueci-senha'>
                        <p><Link to="/">Esqueci minha senha</Link></p>
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        style={{
                            backgroundColor: '#ffde59',
                            borderRadius: '8px',
                            border: 'none',
                            color: '#292626',
                            padding: '10px 20px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={(event) => {
                            event.preventDefault();
                            navigate('/');
                        }}
                    >
                        ENTRAR
                    </button>
                </form>

                
                <label className="cadastro-label" style={{ marginTop: '20px' }}>
                    Não tem conta? <Link to="/cadastro" style={{ color: '#292626', fontWeight: 'bold', textDecoration: 'none' }}>Cadastre-se aqui!</Link>
                </label>
            </div>
        </div>
        </>
    );
};

export default Login;
