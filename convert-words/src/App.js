import React, { useState } from 'react';
import './App.css';

function App() {
  const [ mensagem, setMensagem] = useState()

  const converter = (action) => {
    switch(action){
      case 'lower':
        setMensagem(mensagem.toLowerCase())
        break;
      case 'upper':
        setMensagem(mensagem.toUpperCase())
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <textarea className="textarea" value={mensagem} onChange={(evt) => setMensagem(evt.target.value )}></textarea>
      <div>
        <button onClick={() => converter("lower")}>lowecase</button>
        <button onClick={() => converter("upper")}>UPPERCASE</button>
      </div>
    </div>
  );
}

export default App;
