import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Cadastro from './components/Cadastro/Cadastro';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import LiteraturaBrasileira from './components/LiteraturaBrasileira/LiteraturaBrasileira';
import 'flowbite/dist/flowbite.css';
import './index.css'; 
import Sobre from './components/Sobre/Sobre.js';


function App() {
    return (
        <Router>
           <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="*" element={<Navigate to="/" />} /> 
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/literatura-brasileira" element={<LiteraturaBrasileira />} />
            </Routes>
        </Router>
    );
}

export default App;
