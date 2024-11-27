import React, { useState } from 'react';

function ContadorSimples() {
  // useState é utilizado para criar o estado do contador
  const [contador, setContador] = useState(0);

  // Função para incrementar o contador
  const incrementar = () => {
    setContador(contador + 1);  // Incrementa o valor do contador
  };

  // Função para decrementar o contador (garante que não vá abaixo de 0)
  const decrementar = () => {
    if (contador > 0) {  // Verifica se o contador é maior que 0 antes de decrementar
      setContador(contador - 1);  // Decrementa o valor do contador
    }
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default ContadorSimples;
