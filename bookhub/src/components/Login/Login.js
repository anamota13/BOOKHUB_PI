import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="form-container">
            <div className="form-card">
                <img src={Logo} alt="Logo" className="logo" />
                <h2 className="titulo-bemvindo">Seja bem-vindo!</h2>

                <form>
                    <div className="input-group">
                        <label className="input-label">E-mail</label>
                        <input type="email" className="input-field" placeholder="E-mail" />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Senha</label>
                        <input type="password" className="input-field" placeholder="Senha" />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        style={{
                            backgroundColor: isHovered ? '#fbbf24' : '#ffd700',
                            borderRadius: '8px',
                            border: 'none',
                            color: 'black',
                            padding: '10px 20px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
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

                {/* Adicionando Link para a página de Cadastro */}
                <label className="cadastro-label" style={{ marginTop: '20px' }}>
                    Não tem conta? <Link to="/cadastro" style={{ color: 'yellow', fontWeight: 'bold', textDecoration: 'none' }}>Cadastre-se aqui!</Link>
                </label>
            </div>
        </div>
    );
};

export default Login;
