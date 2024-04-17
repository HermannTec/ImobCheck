import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Componente from './components/comodos_componentes';
import Home from './components/home';
import FormCadastro from './components/form_cadastro';
import FormCorretor from './components/form_cadastro_corretor';
import Pesquisa from './components/pesquisa';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/imoveis" element={<Componente />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastro_imovel" element={<FormCadastro />} />
        <Route path="/cadastro_corretor" element={<FormCorretor />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
      </Routes>
    </Router>
  );
};

export default App;

        
    