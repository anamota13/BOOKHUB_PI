import React from 'react';
import Navbar from './components/Navbar/Navbar';
import FooterComponent from './components/Footer/Footer';
import 'flowbite/dist/flowbite.css';
 



function App(){
    return (
        <div className='App'>
            <Navbar />
            <FooterComponent />
        </div>
    );
}


export default App;