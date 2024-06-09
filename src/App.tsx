import React from 'react';
import logo from './logo.svg';
import FactWindow from './FactWindow';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Presented facts might not be factual!</h1>
      </header>
      <FactWindow type={'Funny'}/>
      <FactWindow type={'Interesting'}/>
      <FactWindow type={'Creepy'}/>
    </div>
  );
}

export default App;
