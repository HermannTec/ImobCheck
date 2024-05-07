import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Componente from './components/comodos_componentes';
import Home from './components/home';
import FormCadastro from './components/form_cadastro';
import FormCorretor from './components/form_cadastro_corretor';
import Pesquisa from './components/pesquisa';

const PrivateRoute = ({ element, ...rest }) => {
  const isLoggedIn = localStorage.getItem('token'); // Verifica se há um token de autenticação no localStorage
  return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/imoveis" element={<Componente />}/>
        <Route path="/cadastro_imovel" element={<FormCadastro />}/>
        <Route path="/cadastro_corretor" element={<FormCorretor />}/>
        <Route path="/pesquisa"element={<Pesquisa />} />
      </Routes>
    </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/login';
// import Componente from './components/comodos_componentes';
// import Home from './components/home';
// import FormCadastro from './components/form_cadastro';
// import FormCorretor from './components/form_cadastro_corretor';
// import Pesquisa from './components/pesquisa';

// const PrivateRoute = ({ element, ...rest }) => {
//   const isLoggedIn = localStorage.getItem('token'); // Verifica se há um token de autenticação no localStorage
//   return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/" replace />;
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/imoveis" element={<PrivateRoute element={<Componente />} />} />
//         <Route path="/cadastro_imovel" element={<PrivateRoute element={<FormCadastro />} />} />
//         <Route path="/cadastro_corretor" element={<PrivateRoute element={<FormCorretor />} />} />
//         <Route path="/pesquisa" element={<PrivateRoute element={<Pesquisa />} />} />
//       </Routes>
//     </Router>
//   );
// };
