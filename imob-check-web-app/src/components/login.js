import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './header';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Obtém a função de navegação

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Envia a solicitação de login para o servidor
      const response = await axios.post('URL_DO_SEU_BACKEND/login', {
        username,
        password,
      });

      // Se o login for bem-sucedido, redireciona para a rota "/imoveis"
      navigate('/imoveis');
    } catch (error) {
      // Trate os erros de login, se necessário
      console.error('Erro de login:', error);
    }
  };

  return (
    <div>
      <Header /> {/* Adicione o componente Header */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
