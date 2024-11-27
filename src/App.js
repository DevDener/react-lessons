import React from 'react';

// Importando os componentes de cada exercício
import ContadorSimples from './components/ContadorSimples';
import CorFundo from './components/CorFundo';
import ListaTarefas from './components/ListaTarefas';
import Temporizador from './components/Temporizador';
import FiltroLista from './components/FiltroLista';
import FormularioRegistro from './components/FormularioRegistro';
import RequisicaoApi from './components/RequisicaoApi';
import GaleriaImagens from './components/GaleriaImagens';
import TimerIntervalo from './components/TimerIntervalo';
import TabsNavegaveis from './components/TabsNavegaveis';

// Estilos globais
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Projeto de React - Atividades</h1>
      <div className="menu">
        <button className="menu-btn">
          <a href="#contador">Contador Simples</a>
        </button>
        <button className="menu-btn">
          <a href="#cor-fundo">Alteração de Cor de Fundo</a>
        </button>
        <button className="menu-btn">
          <a href="#lista-tarefas">Lista de Tarefas</a>
        </button>
        <button className="menu-btn">
          <a href="#temporizador">Temporizador</a>
        </button>
        <button className="menu-btn">
          <a href="#filtro-lista">Filtro de Lista</a>
        </button>
        <button className="menu-btn">
          <a href="#formulario-registro">Formulário de Registro</a>
        </button>
        <button className="menu-btn">
          <a href="#requisicao-api">Requisição de Dados</a>
        </button>
        <button className="menu-btn">
          <a href="#galeria-imagens">Galeria de Imagens</a>
        </button>
        <button className="menu-btn">
          <a href="#timer-intervalo">Timer com Intervalo</a>
        </button>
        <button className="menu-btn">
          <a href="#tabs-navegaveis">Tabs Navegáveis</a>
        </button>
      </div>

      {/* Atividades de cada exercício */}
      <section id="contador">
        <ContadorSimples />
      </section>

      <section id="cor-fundo">
        <CorFundo />
      </section>

      <section id="lista-tarefas">
        <ListaTarefas />
      </section>

      <section id="temporizador">
        <Temporizador />
      </section>

      <section id="filtro-lista">
        <FiltroLista />
      </section>

      <section id="formulario-registro">
        <FormularioRegistro />
      </section>

      <section id="requisicao-api">
        <RequisicaoApi />
      </section>

      <section id="galeria-imagens">
        <GaleriaImagens />
      </section>

      <section id="timer-intervalo">
        <TimerIntervalo />
      </section>

      <section id="tabs-navegaveis">
        <TabsNavegaveis />
      </section>
    </div>
  );
}

export default App;
