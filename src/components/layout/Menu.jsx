import './Menu.css'

import React from "react";
import { Link } from 'react-router-dom';

export default props => {

  return (

    <aside className="menu">
      <nav>
        <ul>
          <li> {/* A tag LINK, cria uma tag 'a' */}
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </aside>
    
  );

}