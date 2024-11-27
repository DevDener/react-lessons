import React, { useState } from 'react';

function FiltroLista() {
  // useState para armazenar a lista e o texto do filtro
  const [nomes] = useState(['Ana', 'Carlos', 'Pedro', 'Clara', 'Lucas']);
  const [filtro, setFiltro] = useState('');

  // Filtra os nomes com base no texto do filtro
  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())  // Ignora maiúsculas/minúsculas
  );

  return (
    <div>
      <input 
        type="text" 
        value={filtro} 
        onChange={(e) => setFiltro(e.target.value)} 
        placeholder="Filtrar nomes"
      />
      <ul>
        {nomesFiltrados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltroLista;
