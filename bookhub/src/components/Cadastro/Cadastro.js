import React from 'react';
import Logo from '../../assets/images/logo.png';

import './Cadastro.css';

const Cadastro = () => {
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
                            <label className="input-label">Nome</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Nome"
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">E-mail</label>
                            <input
                                type="email"
                                className="input-field"
                                placeholder="E-mail"
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Telefone</label>
                            <input
                                type="tel"
                                className="input-field"
                                placeholder="+55 Telefone"
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">Data de Nascimento</label>
                            <input
                                type="date"
                                className="input-field"
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

export default Cadastro;
