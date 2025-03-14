import React from 'react';
import "./Sobre.css";
import { Faixa } from "../Faixa/Faixa";
import { Navbar } from "../Navbar/Navbar";
import Footer  from "../Footer/Footer";

function Sobre() {
    return (
        <div className="content-sobre">
            <Faixa/>
            <Navbar/>
            <h1>Bem-vindo à <strong>BookHub</strong>, sua livraria online!</h1>
            <p>
                A BookHub é um projeto acadêmico desenvolvido por estudantes do curso de <strong>DSM da Fatec Franca</strong>.
                Nosso objetivo é criar uma plataforma de comércio eletrônico que ofereça uma experiência de compra de livros única e agradável.
            </p>
            <Footer/>
        </div>
        
        
    );
}

export default Sobre;