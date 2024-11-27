import React, { useState, useEffect } from 'react';

function RequisicaoApi() {
  // useState para armazenar os posts e o estado de carregamento
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(false);

  // useEffect para fazer a requisição quando o componente for carregado
  useEffect(() => {
    setCarregando(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);  // Armazena os posts na variável de estado
        setCarregando(false);  // Atualiza o estado de carregamento
      });
  }, []);  // A requisição ocorre uma vez, quando o componente é montado

  return (
    <div>
      {carregando ? (
        <p>Carregando...</p>  // Exibe "Carregando..." enquanto os dados não chegam
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RequisicaoApi;
