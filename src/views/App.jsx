import './App.css'

import React from 'react';
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

export default props => {

  return (

    <div className="app">

      <Menu />
      <Content />

    </div>
    
  );

}