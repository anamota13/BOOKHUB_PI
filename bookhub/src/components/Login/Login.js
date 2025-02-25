import React from 'react';
import Logo from '../../assets/images/logo.png';

import './Login.css';

const Login = () => {
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
                                placeholder="E-mail"
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Senha</label>
                            <input
                                type="password"
                                className="input-field"
                                placeholder="Senha"
                            />
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
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