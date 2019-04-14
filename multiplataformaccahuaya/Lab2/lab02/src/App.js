import React, { Component } from 'react';
import './App.css';
import Contador from './components/Contador/Contador';
import Calculadora from './components/Contador/Calculadora';

class App extends Component {
  render() {
    return (<div>
      <Contador valor={6} />
      <hr />
      
      <Calculadora valor={8} valor2={5} />
    </div>);
  }
}

export default App;
