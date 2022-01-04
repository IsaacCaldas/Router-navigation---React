import './Content.css'

import React from "react";
import { Switch, Route } from 'react-router-dom';

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'

export default props => {

  return (

    <main className="content">
      <Switch> {/* Esse exact ele considera a rota com o path exato, ou seja se realmente for o / (podendo ser colocado nos outros, mas surtirá tanto efeito) possibilitando a rota padrão ficar em cima sem atrapalhar as outras rotas */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/param/:id'>
          <Param />
        </Route>
      </Switch>
    </main>
    
  );

}