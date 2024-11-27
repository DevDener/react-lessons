import React, { useState } from 'react';

function FormularioRegistro() {
  // useState para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para validar e enviar o formulário
  const enviarFormulario = (e) => {
    e.preventDefault();  // Previne o comportamento padrão de envio do formulário
    if (nome && email && senha) {
      setMensagem(`Bem-vindo, ${nome}!`);
    } else {
      setMensagem('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <form onSubmit={enviarFormulario}>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          placeholder="Nome"
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
        />
        <input 
          type="password" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          placeholder="Senha"
        />
        <button type="submit">Registrar</button>
      </form>
      <p>{mensagem}</p>
    </div>
  );
}

export default FormularioRegistro;
