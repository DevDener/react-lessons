import React, { useState, useEffect } from 'react';

function TimerComIntervalo() {
  // useState para controlar o tempo e o intervalo
  const [tempo, setTempo] = useState(0);
  const [emExecucao, setEmExecucao] = useState(false);  // Controla o estado do timer

  // useEffect para iniciar a contagem regressiva
  useEffect(() => {
    let intervalo;
    if (emExecucao) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => {
          if (prevTempo === 1) {
            alert('O tempo acabou!');  // Alerta quando o tempo chega a 0
            setEmExecucao(false);  // Para o timer
            return 0;
          }
          return prevTempo - 1;  // Decrementa o tempo
        });
      }, 1000);
    } else {
      clearInterval(intervalo);  // Limpa o intervalo ao pausar
    }
    return () => clearInterval(intervalo);  // Limpeza do intervalo
  }, [emExecucao]);

  // Função para iniciar ou pausar o timer
  const alternarTemporizador = () => {
    setEmExecucao(!emExecucao);
  };

  // Função para resetar o timer
  const resetarTemporizador = () => {
    setTempo(0);
    setEmExecucao(false);  // Pausa o timer ao resetar
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

export default TimerComIntervalo;
