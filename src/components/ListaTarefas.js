import React, { useState } from 'react';

function ListaDeTarefas() {
  // useState para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Função para adicionar tarefa
  const adicionarTarefa = () => {
    setTarefas([...tarefas, { nome: novaTarefa, concluida: false }]);  // Adiciona a tarefa na lista
    setNovaTarefa('');  // Limpa o campo de input
  };

  // Função para remover tarefa
  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));  // Remove a tarefa pelo índice
  };

  // Função para marcar tarefa como concluída
  const marcarComoConcluida = (index) => {
    const novaLista = [...tarefas];
    novaLista[index].concluida = !novaLista[index].concluida;  // Altera o status de concluída
    setTarefas(novaLista);  // Atualiza a lista de tarefas
  };

  return (
    <div>
      <input 
        type="text" 
        value={novaTarefa} 
        onChange={(e) => setNovaTarefa(e.target.value)} 
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
              {tarefa.nome}
            </span>
            <button onClick={() => marcarComoConcluida(index)}>Concluir</button>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
