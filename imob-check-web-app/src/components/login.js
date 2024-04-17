import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Importe os ícones do React Icons
import '../styles/login.css'; 
import Header from './header';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [realty, setRealty] = useState('');
  const [realtyList, setRealtyList] = useState([]);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const navigate = useNavigate(); 

  const fetchRealtyList = async () => {
    try {
      const response = await axios.get('URL_DA_SUA_API_FLASK/imobiliarias');
      setRealtyList(response.data);
    } catch (error) {
      console.error('Erro ao buscar lista de imobiliárias:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('URL_DA_SUA_API_FLASK/login', {
        username,
        password,
        realty
      });
      console.log('Resposta da API:', response.data);
      if (response.status === 200) {
        navigate('/pesquisa');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <>
    <Header />
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Ícone de olho para mostrar/esconder a senha */}
            {showPassword ? (
              <FiEyeOff onClick={() => setShowPassword(false)} />
            ) : (
              <FiEye onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="realty">Imobiliária:</label>
          <input
            type="text"
            id="realty"
            value={realty}
            onChange={(e) => setRealty(e.target.value)}
            onFocus={fetchRealtyList} 
            required
          />
          {realtyList.length > 0 && (
            <ul className="realty-list">
              {realtyList.map((realtyItem) => (
                <li key={realtyItem.id}>{realtyItem.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="input-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="forgot-password">
        <a href="#">Esqueci minha senha</a>
      </div>
    </div>
    </>
  );
};

export default Login;
