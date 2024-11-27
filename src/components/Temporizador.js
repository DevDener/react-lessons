import React, { useState, useEffect } from 'react';

function Temporizador() {
  // useState para controlar o tempo
  const [tempo, setTempo] = useState(0);
  const [emExecucao, setEmExecucao] = useState(false);  // Controla se o temporizador está em execução

  // useEffect para iniciar o temporizador quando o emExecucao for verdadeiro
  useEffect(() => {
    let intervalo;
    if (emExecucao) {
      intervalo = setInterval(() => {
        setTempo((tempoAntigo) => tempoAntigo + 1);  // Incrementa o tempo
      }, 1000);
    } else {
      clearInterval(intervalo);  // Limpa o intervalo quando o temporizador é pausado
    }
    return () => clearInterval(intervalo);  // Limpeza do intervalo ao desmontar o componente
  }, [emExecucao]);  // Executa sempre que emExecucao mudar

  // Função para iniciar ou pausar o temporizador
  const alternarTemporizador = () => {
    setEmExecucao(!emExecucao);
  };

  // Função para resetar o temporizador
  const resetarTemporizador = () => {
    setTempo(0);
    setEmExecucao(false);  // Pausa o temporizador ao resetar
  };

  return (
    <div>
      <h1>Tempo: {tempo}s</h1>
      <button onClick={alternarTemporizador}>
        {emExecucao ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={resetarTemporizador}>Resetar</button>
    </div>
  );
}

export default Temporizador;
