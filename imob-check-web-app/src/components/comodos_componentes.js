// Componente.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';
import Header from './header';
import Menu from './menu'; // Importe o novo componente Menu

const Componente = () => {
  const [componentes, setComponentes] = useState([
    { nome: 'Cozinha', descricao: '', fotos: [] },
    { nome: 'Sala', descricao: '', fotos: [] },
    { nome: 'Dormitório', descricao: '', fotos: [] },
    { nome: 'Banheiro', descricao: '', fotos: [] },
    { nome: 'Lavanderia', descricao: '', fotos: [] }
  ]);

  const [novoNomeComponente, setNovoNomeComponente] = useState('');
  const [fotoModal, setFotoModal] = useState(null);

  const handleDescricaoChange = (index, event) => {
    const novosComponentes = [...componentes];
    novosComponentes[index].descricao = event.target.value;
    setComponentes(novosComponentes);
  };

  const handleAdicionarFoto = (index, event) => {
    const novosComponentes = [...componentes];
    novosComponentes[index].fotos.push(URL.createObjectURL(event.target.files[0]));
    setComponentes(novosComponentes);
  };

  const handleAdicionarComponente = () => {
    if (novoNomeComponente.trim() === '') {
      alert('Nome do novo cômodo precisa ser escrito');
      return;
    }
    const novoComponente = { nome: novoNomeComponente, descricao: '', fotos: [] };
    setComponentes([...componentes, novoComponente]);
    setNovoNomeComponente('');
  };

  const abrirModal = (foto) => {
    setFotoModal(foto);
  };

  const fecharModal = () => {
    setFotoModal(null);
  };

  const handleExtrairRelatorio = () => {
    axios.post('URL_DA_API/relatorio', {
      userId: 'ID_DO_USUARIO',
      imovelId: 'ID_DO_IMOVEL'
    })
    .then(response => {
      console.log('Relatório extraído com sucesso:', response.data);
    })
    .catch(error => {
      console.error('Erro ao extrair relatório:', error);
    });
  };

  return (
    <div>
      <Header />
      <Menu /> {/* Inclui o menu de hambúrguer */}
      <div className="container">
        {componentes.map((componente, index) => (
          <div key={index}>
            <h2>{componente.nome}</h2>
            <div>
              <label htmlFor={`descricao-${index}`}>Descrição:</label>
              <textarea
                id={`descricao-${index}`}
                value={componente.descricao}
                onChange={(event) => handleDescricaoChange(index, event)}
                rows={6}
              />
            </div>
            <div>
              <label htmlFor={`foto-${index}`}>Adicionar Foto:</label>
              <input
                type="file"
                id={`foto-${index}`}
                onChange={(event) => handleAdicionarFoto(index, event)}
                multiple
              />
            </div>
            <div>
              {componente.fotos.map((foto, fotoIndex) => (
                <img
                  key={fotoIndex}
                  src={foto}
                  alt={`Foto ${fotoIndex + 1}`}
                  style={{ width: '200px', height: 'auto', marginRight: '10px', cursor: 'pointer' }}
                  onClick={() => abrirModal(foto)}
                />
              ))}
            </div>
          </div>
        ))}
        <div style={{ position: 'absolute', top: '120px', right: '10px'}}>
          <input
            type="text"
            value={novoNomeComponente}
            onChange={(event) => setNovoNomeComponente(event.target.value)}
            placeholder="Digite novo Comodo"
          />
          <button onClick={handleAdicionarComponente}>Adicionar Componente</button>
          <button onClick={handleExtrairRelatorio}>Extrair relatório</button>
        </div>
        {fotoModal && (
          <div className="modal" onClick={fecharModal}>
            <img src={fotoModal} alt="Foto"  />
            <button className="fechar-modal" onClick={fecharModal}>X</button>
          </div>
        )}
      </div>  
    </div>
  );
};

export default Componente;
