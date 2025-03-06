import React from 'react';
import Destaque from '../../assets/images/Destaque.png';
import './Home.css';


function Home() {
    return (
        <div className="home-container">

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
    );
}

export default Home;
