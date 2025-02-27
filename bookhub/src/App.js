import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cadastro from './components/Cadastro/Cadastro';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Faixa from './components/Faixa/Faixa';

import 'flowbite/dist/flowbite.css';

function App() {
    return (
        <Router>
            <MainContent />
        </Router>
    );
}

function MainContent() {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        if (location.pathname !== '/login' && location.pathname !== '/cadastro') {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    }, [location.pathname]);

    return (
        <div className="App">
            <Faixa /> 
            {showNavbar && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="*" element={<Navigate to="/" />} /> 
            </Routes>

            {showNavbar && <Footer />}
        </div>
    );
}

export default App;
