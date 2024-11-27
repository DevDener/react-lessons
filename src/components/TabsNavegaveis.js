import React, { useState } from 'react';

function TabsNavegaveis() {
  // useState para controlar qual aba está ativa
  const [abaAtiva, setAbaAtiva] = useState(0);

  // Função para mudar a aba ativa
  const mudarAba = (index) => {
    setAbaAtiva(index);  // Atualiza o índice da aba ativa
  };

  return (
    <div>
      <div>
        <button onClick={() => mudarAba(0)} style={{ fontWeight: abaAtiva === 0 ? 'bold' : 'normal' }}>Sobre</button>
        <button onClick={() => mudarAba(1)} style={{ fontWeight: abaAtiva === 1 ? 'bold' : 'normal' }}>Contato</button>
      </div>
      <div>
        {abaAtiva === 0 && <h2>Sobre</h2>}
        {abaAtiva === 1 && <h2>Contato</h2>}
      </div>
    </div>
  );
}

export default TabsNavegaveis;
