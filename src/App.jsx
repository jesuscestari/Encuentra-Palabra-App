import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [oracion, setOracion] = useState("");

  function encontrarPalabraMasGrande(oracion) {

    let palabraMasGrande = ""
    let palabras = oracion.split(" ");

    palabras.forEach(function(palabra){
    if (palabra.length > palabraMasGrande.length){
        palabraMasGrande = palabra
        
     };
    });
    console.log("palabra: " + palabraMasGrande)
    
    return palabraMasGrande
    
  };

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 
    
  
    setOracion('');
    encontrarPalabraMasGrande(oracion);
  };

  

  return (
    <div className="App">
      <div>
        <a href="#">
          <img src={logo} className="logo" alt="Logo Faro" />
        </a>
      </div>
      <h1>Encuentra la palabra mas larga en una oracion</h1>
      <div className="card">

      <form onSubmit={handleSubmit}>
      <input size="80" 
      className="tex" 
      placeholder='Escribe una oracion' 
      id="la_oracion"
      name="la_oracion"
      type="text"
      onChange={event => setOracion(event.target.value)}
      
      />

      <button type="submit" className="subm" >Encontrar</button>
      </form>

      </div>
      <div className="card">
        
      <h2 id='resultado'>{encontrarPalabraMasGrande(oracion)}</h2>

      </div>
     
    </div>
  )
}

export default App
