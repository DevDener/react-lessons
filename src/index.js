import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Arquivo CSS global (opcional)
import App from './App';  // Componente principal
import reportWebVitals from './reportWebVitals';  // (opcional, para análise de performance)

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* O componente principal que será exibido na tela */}
  </React.StrictMode>,
  document.getElementById('root')  // Onde o componente será renderizado no HTML
);

// Se você quiser começar a medir o desempenho em seu aplicativo, passe uma função para registrar resultados (ex: reportWebVitals(console.log))
reportWebVitals();
