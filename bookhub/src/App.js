import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cadastro from './components/Cadastro/Cadastro';
import Login from './components/Login/Login';
import 'flowbite/dist/flowbite.css';


function App(){
    return (
        <div className='App'>
            {/*<Navbar>*/}
            {/*<Footer>*/} 
            {/*<Cadastro />*/}
            <Login/>
        </div>
    );
}

export default App;
