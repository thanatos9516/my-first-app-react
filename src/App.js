import React from 'react';
import './App.css';

// function Helloworld(props) {
//   return (
//       <div id="hello">
//         <h3>{props.subtitle}</h3>
//         {props.mytext} 
//       </div>
//   )
// }

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if (this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext} 
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
    )
    } else{
      return <h1>
        No hay elementos
        <button onClick={this.toggleShow}>Toggle show</button>
        </h1>
      
    }
  }
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
