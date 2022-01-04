import React from "react";

import { useParams } from 'react-router-dom';

export default props => {

  const { id } = useParams();

  return (

    <div className="param">
      <h1>Rotas com parâmetros</h1>
      <h4>Saiba como enviar parâmetros pelas rotas.</h4>
      <p>Seu parâmetro: <strong>{id}</strong>.</p>
    </div>
    
  );

}