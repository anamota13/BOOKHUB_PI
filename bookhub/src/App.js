// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cadastro from './components/Cadastro/Cadastro';
import Login from './components/Login/Login';
// import Home from './components/Home/Home'; // Quando criar a home importar o arquivo

import 'flowbite/dist/flowbite.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/* Rotas que usam Navbar e Footer */}
                        {/* <Route index element={<Home />} />  Índex indica a rota padrão dentro do Layout */}
                        <Route path="/cadastro" element={<Cadastro />} />
                         {/* Adicione outras rotas que PRECISAM de navbar/footer aqui */}
                    </Route>
                     {/* Rotas que NÃO usam Navbar e Footer */}
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

function Layout() {
    const location = useLocation();
    //Essa linha é opcional, mas é boa prática.  Evita renderizar Navbar em /login
    const showNavbarAndFooter = location.pathname !== '/login';

    return (
        <>
            {showNavbarAndFooter && <Navbar />}
            <Routes>
                {/* Todas as sub-rotas do layout vão aqui.  Elas herdam o showNavbarAndFooter */}
                <Route path="/cadastro" element={<Cadastro />} />
                {/* <Route path="/" element={<Home />} />  */}
                {/* MAIS ROTAS AQUI */}
                <Route path="*" element={<div>Página não encontrada (404)</div>} />
                {/*Rota Curinga.  Boa pratica ter. */}
            </Routes>
             {showNavbarAndFooter && <Footer />}
        </>
    )
}

export default App;