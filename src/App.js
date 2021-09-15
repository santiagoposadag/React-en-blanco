import React, { Fragment } from 'react';
import './App.css';
import Contador from './components/contador';


function App() {
  return (
    <Fragment>
      <h2 className="encabezado">Lista de personas</h2>
      <Contador />
    </Fragment>
  );
}

export default App;
