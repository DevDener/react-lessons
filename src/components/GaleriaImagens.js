import React, { useState } from 'react';

function GaleriaImagens() {
  // Lista de imagens de exemplo
  const imagens = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/0000FF',
    'https://via.placeholder.com/150/FF0000'
  ];

  // useState para armazenar a imagem selecionada
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  // Função para selecionar uma imagem para exibir em tamanho maior
  const selecionarImagem = (imagem) => {
    setImagemSelecionada(imagem);
  };

  // Função para fechar a visualização da imagem
  const fecharModal = () => {
    setImagemSelecionada(null);
  };

  return (
    <div>
      <div>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt="Galeria" onClick={() => selecionarImagem(imagem)} />
        ))}
      </div>

      {imagemSelecionada && (
        <div>
          <div>
            <img src={imagemSelecionada} alt="Imagem Ampliada" />
            <button onClick={fecharModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GaleriaImagens;
