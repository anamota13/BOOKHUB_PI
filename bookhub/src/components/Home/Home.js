import React from 'react';
import Destaque from '../../assets/images/Destaque.png';
import './Home.css';
import Footer from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import {Faixa} from '../Faixa/Faixa';


function Home() {
    return (
        <div className="home-content">
            <Faixa />
            <Navbar />
            <div className='home-body'>
                <div className='text-destaque'>
                    <h1>DESTAQUE</h1>
                </div>
                <div className='img-destaque'>

                    <img src={Destaque} alt="Destaque" className="destaque" />


                </div>
                <div className='text-products'>
                    <h2>Os melhores livros para você</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
