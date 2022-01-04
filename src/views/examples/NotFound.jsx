import React from "react";
import { Link } from 'react-router-dom';

import './NotFound.css';

export default props => {

  return (

    <div className="notfound">
      <div className="box">
        <h1>404</h1>
        <h4>Página não encontrada!</h4>
        <Link to='/'>Voltar ao início.</Link>
      </div>
    </div>
    
  );

}