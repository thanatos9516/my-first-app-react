import React from 'react';
import './App.css';

function Helloworld(props) {
  return (
      <div id="hello">
        <h3>{props.subtitle}</h3>
        {props.mytext} 
      </div>
  )
}

function App() {
  return (
   <div>
     This is my component:
      <Helloworld mytext="Hello coder" subtitle="loremp ispum" /> 
      <Helloworld mytext="Hola mundo" subtitle="Subtitulo 2" /> 
      <Helloworld mytext="Hello!" subtitle="este es el 2" />
   </div>
  );
}

export default App;
