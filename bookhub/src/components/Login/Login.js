import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import './Login.css';

const Login = () => {
    const [isHovered, setIsHovered] = useState(false); 

    return (
        <>
            <header className="navbar">
            </header>

            <div className="form-container">
                <div className="form-card">
                    <img src={Logo} alt="Logo" className="logo" />
                    <h2 className="titulo-bemvindo">Seja bem-vindo!</h2>

                    <form>
                        <div className="input-group">
                            <label className="input-label">E-mail</label>
                            <input
                                type="email"
                                className="input-field"
                                placeholder="Digite seu e-mail"
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Senha</label>
                            <input
                                type="password"
                                className="input-field"
                                placeholder="Digite sua senha"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-submit"
                            style={{
                                backgroundColor: '#fbbf24',
                                borderRadius: '8px',
                                border: 'none',
                                color: 'black',
                                padding: '10px 20px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            ENTRAR
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
