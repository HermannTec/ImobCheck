import React, { useState } from 'react';
import axios from 'axios';
import '../styles/formulario.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Importe os ícones
import Header from './header';

const FormCadastroCorretor = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [creci, setCreci] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar os dados para a API
    const data = {
      nome,
      email,
      senha,
      creci
    };
    axios.post('URL_DA_API', data)
      .then((response) => {
        console.log('Dados enviados com sucesso:', response.data);
        // Lógica adicional após o envio dos dados
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  return (
    <>
    <Header/>
    
    <div className="formulario-container">
      <form className="formulario-form" onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="formulario-input"
          placeholder="Digite seu nome"
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="formulario-input"
          placeholder="Digite seu email"
          required
        />
        <label>Senha:</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="formulario-input password-input"
            placeholder="Digite sua senha"
            required
          />
          <button
            type="button"
            className="show-password-button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
        <label>CRECI:</label>
        <input
          type="text"
          value={creci}
          onChange={(e) => setCreci(e.target.value)}
          className="formulario-input"
          placeholder="Digite seu CRECI"
          required
        />
        <button type="submit" className="formulario-submit-button">
          Enviar
        </button>
      </form>
    </div>
    </>
  );
};

export default FormCadastroCorretor;
