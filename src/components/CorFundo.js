import React, { useState, useEffect } from 'react';

function CorDeFundo() {
  // useState para armazenar a cor de fundo
  const [corFundo, setCorFundo] = useState('#ffffff'); // Inicializa com cor branca

  // Função para gerar uma cor aleatória em formato hexadecimal
  const gerarCorAleatoria = () => {
    const cores = ['#ff5733', '#33ff57', '#3357ff', '#f0f0f0', '#ff00ff'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    setCorFundo(corAleatoria);  // Atualiza a cor de fundo
  };

  // useEffect para alterar a cor de fundo do body sempre que a cor mudar
  useEffect(() => {
    document.body.style.backgroundColor = corFundo;
  }, [corFundo]);  // Executa quando a corFundo for alterada

  return (
    <div>
      <button onClick={gerarCorAleatoria}>Mudar Cor de Fundo</button>
    </div>
  );
}

export default CorDeFundo;
